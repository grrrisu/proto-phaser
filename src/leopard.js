import { Dawning } from './namespace';

Dawning.Leopard = class Leopard {

  constructor(map){
    this.map = map;
    this.game = map.game;
    this.padding = 25;
    this.leopards = [];
  }

  createLeopard(isoX, isoY, dataX, dataY){
    var leopard = this.game.add.isoSprite(isoX + this.padding, isoY + this.padding, 0, 'leopard', 0, this.map.isoGroup);
    this.map.predators.push(leopard);
    //this.game.physics.isoArcade.enable(leopard);
    //leopard.body.collideWorldBounds = true;
    leopard.anchor.set(0.5);
    leopard.scale.setTo(0.8);
    this.setPosition(leopard, dataX, dataY, this.map);
  }

  update(){
    this.map.predators.forEach((leopard) => {
      this.think(leopard);
    });
  }

  think(leopard){
    if (!leopard.moving){
      var rpos = this.map.relativePosition(leopard.isoX - this.padding, leopard.isoY - this.padding);
      console.log("leo:",rpos.x,rpos.y);
      var prey = this.lookAround(leopard, rpos);
      if (prey){
        console.log("prey", prey.x, prey.y);
        this.hunt(leopard, prey, rpos);
      }
    }
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
      this.huntX(leopard, prey, rpos);
    } else {
      this.huntY(leopard, prey, rpos);
    }
  }

  huntX(leopard, prey, rpos, secondTry){
    if(rpos.x > prey.x && !this.map.mapData.isWall(rpos.x - 1, rpos.y)){
      this.moveTo(leopard, rpos.x - 1, rpos.y);
    } else if(rpos.x < prey.x && !this.map.mapData.isWall(rpos.x + 1, rpos.y)) {
      this.moveTo(leopard, rpos.x + 1, rpos.y);
    } else if(!secondTry){
      this.huntY(leopard, prey, rpos, true);
    }
  }

  huntY(leopard, prey, rpos, secondTry){
    if(rpos.y > prey.y && !this.map.mapData.isWall(rpos.x, rpos.y - 1)){
      this.moveTo(leopard, rpos.x, rpos.y - 1);
    } else if(rpos.y < prey.y && !this.map.mapData.isWall(rpos.x, rpos.y + 1)){
      this.moveTo(leopard, rpos.x, rpos.y + 1);
    } else if(secondTry){
      this.huntX(leopard, prey, rpos, true);
    }
  }

  moveTo(leopard, x, y){
    leopard.moving = true;
    console.log("move",x,y);
    var pos = this.map.mapPosition(x, y);
    var tween = this.game.add.tween(leopard).to({isoX: pos.x + this.padding, isoY: pos.y + this.padding}, 1500, Phaser.Easing.Linear.InOut, true); // what, duration, easing, autostart, delay
    tween.onStart.add(this.startLeopard, this);
    tween.onUpdateCallback(() => {
      var rpos = this.map.relativePosition(leopard.isoX - this.padding, leopard.isoY - this.padding);
      var x = Math.round(rpos.x);
      var y = Math.round(rpos.y);
      this.updatePosition(leopard, x, y, this.map);
    });
    tween.onComplete.add(this.stopLeopard, this);
  }

  startLeopard(leopard){
    //this.map.mapData.removePredator(leopard);
  }

  stopLeopard(leopard){
    // leopard.body.velocity.x = 0;
    // leopard.body.velocity.y = 0;
    leopard.moving = false;
    this.think(leopard);
  }

  updatePosition(sprite, x, y, map){
    if(sprite.field.x != x || sprite.field.x != y){
      map.mapData.removeThing(sprite);
      this.setPosition(sprite, x, y, map);
      map.positionChanged();
    }
  }

  setPosition(sprite, x, y, map){
    var field = this.map.mapData.getField(x, y);
    map.mapData.addThing(sprite, x, y);
    map.visability.applyThingVisability(x, y);
  }

}
