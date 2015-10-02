import { Dawning } from './namespace';

Dawning.InputHandler = class InputHandler {

  constructor(map){
    this.map = map;
    this.game = map.game;
    this.currentPos = {x: null, y: null};
  }

  create(){
    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  positionChanged(pawn){
    var rpos = this.map.relativePosition(pawn.man.x, pawn.man.y);
    if (this.currentPos.x != rpos.x || this.currentPos.y != rpos.y){
      pawn.visibleArea();
      this.currentPos = {x: rpos.x, y: rpos.y};
    }
  }

  moveWithCursor(pawn){
    var speed = 150
    pawn.man.body.velocity.x = 0;
    pawn.man.body.velocity.y = 0;

    if (this.cursors.left.isDown) {
      pawn.man.body.velocity.x = -speed;
      pawn.man.animations.play('walk');
      pawn.man.scale.x = -1;
      this.positionChanged(pawn);
    } else if (this.cursors.right.isDown) {
      pawn.man.body.velocity.x = speed;
      pawn.man.animations.play('walk');
      pawn.man.scale.x = 1;
      this.positionChanged(pawn);
    } else if (this.cursors.down.isDown) {
      pawn.man.body.velocity.y = speed;
      pawn.man.animations.play('walk');
      this.positionChanged(pawn);
    } else if (this.cursors.up.isDown) {
      pawn.man.body.velocity.y = -speed;
      pawn.man.animations.play('walk');
      this.positionChanged(pawn);
    } else {
      pawn.man.animations.play('standing');
    }
  }

}
