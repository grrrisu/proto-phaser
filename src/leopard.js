import { Dawning } from './namespace';

Dawning.Leopard = class Leopard {

  constructor(map){
    this.map = map;
    this.game = map.game;
    this.padding = 10;
    this.leopards = [];
  }

  createLeopard(x, y, dataX, dataY){
    var leopard = this.game.add.isoSprite(x - 10, y - 10, 0, 'leopard', 0, this.map.isoGroup);
    this.map.predators.push(leopard);
    this.leopards.push(leopard);
    //this.game.physics.isoArcade.enable(leopard);
    //leopard.body.collideWorldBounds = true;
    leopard.anchor.set(0.5);
    leopard.scale.setTo(0.5);
    this.map.mapData.addThing(leopard, dataX, dataY);
  }

  update(){
    this.leopards.forEach((leopard) => {
      this.think(leopard);
    });
  }

  think(leopard){
    var rpos = this.map.relativePosition(leopard.isoX + 10, leopard.isoY + 10);
    console.log("leo:",rpos.x,rpos.y);
    var prey = this.lookAround(leopard, rpos);
    if (prey) console.log("prey", prey.x, prey.y);
    if (prey) this.hunt(leopard, prey, rpos);
  }

  lookAround(leopard, rpos) {
    var prey;
    this.map.mapData.rayCast(rpos, 4, (x, y) => {
      var field = this.map.mapData.getField(x, y);
      if (field && field.pawn) {
        prey = {x: x, y: y, prey: field.pawn};
      }
    });
    return prey;
  }

  hunt(leopard, prey, rpos){
    if(Math.abs(rpos.x - prey.x) > Math.abs(rpos.y - prey.y)){
      if(rpos.x > prey.x){
        this.moveTo(leopard, rpos.x - 1, rpos.y);
      } else {
        this.moveTo(leopard, rpos.x + 1, rpos.y);
      }
    } else {
      if(rpos.y > prey.y){
        this.moveTo(leopard, rpos.x, rpos.y - 1);
      } else {
        this.moveTo(leopard, rpos.x, rpos.y + 1);
      }
    }
  }

  moveTo(leopard, x, y){
    console.log("move",x,y);
    var pos = this.map.mapPosition(x, y);
    var tween = this.game.add.tween(leopard).to({isoX: pos.x - 10, isoY: pos.y - 10}, 1, Phaser.Easing.Quadratic.InOut, true, 1500); // what, duration, easing, autostart, delay
    tween.onStart.add(this.startLeopard, this);
    tween.onUpdateCallback(() => {
      // leopard.body.velocity.x = 0;
      // leopard.body.velocity.y = 0;
      // leopard.body.velocity.z = 0;
      this.map.positionChanged();
    });
    tween.onComplete.add(this.stopLeopard, this);
  }

  startLeopard(leopard){
    this.map.mapData.removePredator(leopard);
  }

  stopLeopard(leopard){
    // leopard.body.velocity.x = 0;
    // leopard.body.velocity.y = 0;
    var rpos = this.map.relativePosition(leopard.isoX + 10, leopard.isoY + 10);
    this.map.mapData.addPredator(leopard, rpos.x, rpos.y);
    this.map.visability.applyThingVisability(rpos.x, rpos.y);
    this.think(leopard);
  }

}
