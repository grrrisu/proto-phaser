import { Dawning } from './namespace';

Dawning.Pawn = class Pawn {

  constructor(map){
    this.map = map;
    this.game = map.game;
  }

  preload(){
    this.game.load.atlasJSONHash('pawn', 'images/pawn.png', 'images/pawn.json');
  }

  moveTo(x, y){
    this.man.moveTo(x * this.map.fieldSize + 25, y * this.map.fieldSize + 30);
  }

  createMan(x, y) {
    this.man = this.game.add.sprite(x * this.map.fieldSize + 25, y * this.map.fieldSize + 30, 'pawn', 0);
    this.man.anchor.setTo(0.5);

    this.man.animations.add('standing', [0], 5, false, true);
    this.man.animations.add('walk', [1,2,3,4], 5, true, true);
    
    this.game.physics.arcade.enable(this.man);

    this.game.camera.follow(this.man);
    this.rayCast();
    return this;
  }

  update(){
  }

  rayCast() {
    this.map.maskGraphics.clear();
    this.map.maskGraphics.beginFill(0x000000);
    var numberOfRays = 96;
    var rayLength = 5;
    var rpos = this.map.relativePosition(this.man.x, this.man.y);

    for(var i = 0; i < numberOfRays; i++){
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
