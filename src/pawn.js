import { Dawning } from './namespace';

Dawning.Pawn = class Pawn {

  constructor(map){
    this.map = map;
    this.game = map.game;
  }

  preload(){
    this.game.load.image('caveman', 'images/caveman.png');
  }

  moveTo(x, y){
    this.man.moveTo(x * this.map.fieldSize + 25, y * this.map.fieldSize + 30);
  }

  createMan(x, y) {
    this.man = this.game.add.sprite(x * this.map.fieldSize + 25, y * this.map.fieldSize + 30, 'caveman');
    this.man.anchor.setTo(0.5);
    this.game.physics.arcade.enable(this.man);

    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.game.camera.follow(this.man);
    this.rayCast();
    return this;
  }

  update(){
    var speed = 150
    this.man.body.velocity.x = 0;
    this.man.body.velocity.y = 0;

    if (this.cursors.left.isDown) {
        this.man.body.velocity.x = -speed;
        this.man.animations.play('left');
        this.rayCast();
    } else if (this.cursors.right.isDown) {
        this.man.body.velocity.x = speed;
        this.man.animations.play('right');
        this.rayCast();
    } else if (this.cursors.down.isDown) {
        this.man.body.velocity.y = speed;
        this.man.animations.play('right');
        this.rayCast();
    } else if (this.cursors.up.isDown) {
        this.man.body.velocity.y = -speed;
        this.man.animations.play('right');
        this.rayCast();
    }
  }

  rayCast() {
    this.map.maskGraphics.clear();
    //this.map.maskGraphics.lineStyle(2, 0xffffff, 1);
    this.map.maskGraphics.beginFill(0x000000);
    var numberOfRays = 96;
    var rayLength = 5;
    var rpos = this.map.relativePosition(this.man.x, this.man.y);

    for(var i = 0; i < numberOfRays; i++){
      //this.map.maskGraphics.moveTo(man.x, man.y);
      var rayAngle = (Math.PI * 2 / numberOfRays) * i
      var lastX = this.man.x;
      var lastY = this.man.y;
      for(var j= 0; j <= rayLength; j+=1){
        var landingX = Math.round(rpos.x - j * Math.cos(rayAngle));
        var landingY = Math.round(rpos.y - j * Math.sin(rayAngle));

        this.map.maskGraphics.drawRect(landingX * this.map.fieldSize, landingY * this.map.fieldSize, this.map.fieldSize, this.map.fieldSize);

        if(!this.map.isWall(landingX, landingY)){
          lastX = landingX * this.map.fieldSize;
          lastY = landingY * this.map.fieldSize;
        } else {
          break;
        }
      }
    }
  }

}
