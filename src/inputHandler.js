import { Dawning } from './namespace';

Dawning.InputHandler = class InputHandler {

  constructor(map){
    this.map = map;
    this.game = map.game;
  }

  create(){
    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  moveWithCursor(pawn){
    var speed = 150
    pawn.man.body.velocity.x = 0;
    pawn.man.body.velocity.y = 0;

    if (this.cursors.left.isDown) {
        pawn.man.body.velocity.x = -speed;
        pawn.man.animations.play('left');
        pawn.rayCast();
    } else if (this.cursors.right.isDown) {
        pawn.man.body.velocity.x = speed;
        pawn.man.animations.play('right');
        pawn.rayCast();
    } else if (this.cursors.down.isDown) {
        pawn.man.body.velocity.y = speed;
        pawn.man.animations.play('right');
        pawn.rayCast();
    } else if (this.cursors.up.isDown) {
        pawn.man.body.velocity.y = -speed;
        pawn.man.animations.play('right');
        pawn.rayCast();
    }
  }

}
