import { Dawning } from './namespace';

Dawning.Pawn = class Pawn {

  constructor(map){
    this.map = map;
    this.game = map.game;
  }

  preload(){
    this.game.load.atlasJSONHash('pawn', 'images/pawn.png', 'images/pawn.json');
  }

  // moveTo(x, y){
  //   this.man.moveTo(x * this.map.fieldSize + 25, y * this.map.fieldSize + 30);
  // }

  createMan(x, y) {
    this.man = this.game.add.isoSprite(x, y, 0, 'pawn', 0, this.map.isoGroup);
    this.man.anchor.set(0.5);

    this.man.animations.add('standing', [0], 5, false, true);
    this.man.animations.add('walk', [1,2,3,4], 5, true, true);

    this.game.physics.isoArcade.enable(this.man);
    this.man.enableBody = true;
    this.man.body.collideWorldBounds = true;

    this.game.camera.follow(this.man);
    this.visibleArea();
    return this;
  }

  update(){
  }

  visibleArea() {
    this.map.mapData.setAllInvisible();
    var rpos = this.map.relativePosition(this.man.isoX, this.man.isoY);
    this.map.mapData.rayCast(rpos, 5, (x, y) => {
      if(!this.map.mapData.isVisible(x, y)){
        this.map.mapData.setVisible(x, y, true);
      }
    });
    this.map.mapData.lowlightPreviousVisibles();
  }

}
