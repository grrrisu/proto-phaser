import { Dawning } from './namespace';

Dawning.Leopard = class Leopard extends Dawning.Thing {

  constructor(map){
    super();
    this.map = map;
    this.game = map.game;
    this.padding = 25;
    this.speed = 100;
  }

  preload(){
    this.game.load.audio('roaring', 'audio/Mountain_Lion.mp3');
  }

  create(){
    this.roaring = this.game.add.audio('roaring', 1.0,  false);
    this.timer = this.game.time.create(false);
  }

  createLeopard(isoX, isoY, dataX, dataY){
    var leopard = this.game.add.isoSprite(isoX + this.padding, isoY + this.padding, 0, 'leopard', 0, this.map.isoGroup);
    this.map.predators.push(leopard);

    this.game.physics.isoArcade.enable(leopard);
    leopard.enableBody = true;
    leopard.body.collideWorldBounds = true;

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
      rpos = {x: Math.round(rpos.x), y: Math.round(rpos.y)}
      console.log("leo:",rpos.x,rpos.y);

      var prey = this.lookAround(leopard, rpos);
      if (prey){
        if (!leopard.hunting) this.roaring.play();
        leopard.hunting = true;
        leopard.moving = true;
        this.hunt(leopard, prey, rpos);
      } else {
        leopard.hunting = false;
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
      this.moveLeft(leopard);
    } else if(rpos.x < prey.x && !this.map.mapData.isWall(rpos.x + 1, rpos.y)) {
      this.moveRight(leopard);
    } else if(!secondTry){
      this.huntY(leopard, prey, rpos, true);
    } else {
      leopard.moving = false;
    }
  }

  huntY(leopard, prey, rpos, secondTry){
    if(rpos.y > prey.y && !this.map.mapData.isWall(rpos.x, rpos.y - 1)){
      this.moveUp(leopard);
    } else if(rpos.y < prey.y && !this.map.mapData.isWall(rpos.x, rpos.y + 1)){
      this.moveDown(leopard);
    } else if(secondTry){
      this.huntX(leopard, prey, rpos, true);
    } else {
      leopard.moving = false;
    }
  }

  moveLeft(leopard){
    console.log("left");
    leopard.body.velocity.y = 0;
    leopard.body.velocity.x = -this.speed;
    this.startMovement(leopard);
  }

  moveRight(leopard){
    console.log("right");
    leopard.body.velocity.y = 0;
    leopard.body.velocity.x = this.speed;
    this.startMovement(leopard);
  }

  moveUp(leopard){
    console.log("up");
    leopard.body.velocity.y = -this.speed;
    leopard.body.velocity.x = 0;
    this.startMovement(leopard);
  }

  moveDown(leopard){
    console.log("down");
    leopard.body.velocity.y = this.speed;
    leopard.body.velocity.x = 0;
    this.startMovement(leopard);
  }

  startMovement(leopard){
    this.timer.add(500, this.nextMovement, this, leopard);
    this.timer.start();
  }

  nextMovement(leopard){
    console.log(leopard );
    var rpos = this.map.relativePosition(leopard.isoX - this.padding, leopard.isoY - this.padding);
    var x = Math.round(rpos.x);
    var y = Math.round(rpos.y);
    this.updatePosition(leopard, x, y, this.map);

    leopard.moving = false;
    this.think(leopard);
  }

  moveTo(leopard, x, y){
    leopard.moving = true;
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
  }

  stopLeopard(leopard){
    leopard.moving = false;
    this.think(leopard);
  }

}
