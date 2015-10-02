import { Dawning } from './namespace';

Dawning.Pawn = class Pawn {

  constructor(map){
    this.map = map;
    this.game = map.game;
  }

  preload(){

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
    this.visibleArea();
    return this;
  }

  update(){
  }

  visibleArea() {
    this.map.mapData.setAllInvisible();
    this.map.maskGraphics.clear();
    this.map.maskGraphics.beginFill(0x000000);
    var rpos = this.map.relativePosition(this.man.x, this.man.y);
    this.map.rayCast(rpos, (landingX, landingY) => {
      if(!this.map.mapData.isVisible(landingX, landingY)){
        this.map.maskGraphics.drawRect(landingX * this.map.fieldSize, landingY * this.map.fieldSize, this.map.fieldSize, this.map.fieldSize);
        this.map.mapData.setVisible(landingX, landingY, true);
      }
    });
  }

}
