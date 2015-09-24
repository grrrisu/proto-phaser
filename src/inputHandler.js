import { Dawning } from './namespace';

Dawning.InputHandler = class InputHandler {

  constructor(map){
    this.map = map;
    this.game = map.game;
  }

  create(){
    this.game.input.keyboard.createCursorKeys();
  }

  moveWithCursor(pawn){
    var speed = 150
    pawn.body.velocity.x = 0;
    pawn.body.velocity.y = 0;

    if (this.cursors.left.isDown) {
        pawn.body.velocity.x = -speed;
        pawn.animations.play('left');
        pawn.rayCast();
    } else if (this.cursors.right.isDown) {
        pawn.body.velocity.x = speed;
        pawn.animations.play('right');
        pawn.rayCast();
    } else if (this.cursors.down.isDown) {
        pawn.body.velocity.y = speed;
        pawn.animations.play('right');
        pawn.rayCast();
    } else if (this.cursors.up.isDown) {
        pawn.body.velocity.y = -speed;
        pawn.animations.play('right');
        pawn.rayCast();
    }
  }

}
