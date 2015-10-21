import { Dawning } from './namespace';

Dawning.Pawn = class Pawn {

  constructor(map){
    this.map = map;
    this.game = map.game;
    this.padding = 30;
  }

  preload(){
    this.game.load.atlasJSONHash('pawn', 'images/pawn.png', 'images/pawn.json');
  }

  createMan(x, y, dataX, dataY) {
    this.man = this.game.add.isoSprite(x + this.padding, y + this.padding, 0, 'pawn', 0, this.map.isoGroup);
    this.man.anchor.set(0.5);

    this.man.animations.add('standing', [0], 5, false, true);
    this.man.animations.add('walk', [1,2,3,4], 5, true, true);

    this.game.physics.isoArcade.enable(this.man);
    this.man.enableBody = true;
    this.man.body.collideWorldBounds = true;

    this.game.camera.follow(this.man);
    this.visibleArea(dataX, dataY);
    return this;
  }

  update(){
  }

  visibleArea(pawnX, pawnY) {
    this.map.visability.setAllInvisible();
    this.map.mapData.rayCast({x: pawnX, y: pawnY}, 5, (x, y) => {
      if(!this.map.visability.isVisible(x, y)){
        this.map.visability.setVisible(x, y, true);
      }
    });
    this.lookBehindObstacles(pawnX, pawnY);
    this.map.visability.lowlightPreviousVisibles();
  }

  lookBehindObstacles(x, y){
    this.map.mapData.eachField((field) => {
      field.obstacles.forEach((obstacle) => {
        if(obstacle.alpha < 1.0){
          this.game.add.tween(obstacle).to({alpha: 1.0}, 500, Phaser.Easing.Quadratic.InOut, true);
        }
      });
    });
    this.map.visability.lookBehindField(x, y + 1);
    this.map.visability.lookBehindField(x + 1, y + 1);
    this.map.visability.lookBehindField(x + 1, y);
  }

}
