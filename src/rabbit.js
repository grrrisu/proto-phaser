import { Dawning } from './namespace';

Dawning.Rabbit = class Rabbit {

  constructor(map){
    this.map = map;
    this.game = map.game;
  }

  preload(){
    this.game.load.image('rabbit', 'images/rabbit@2x.png');
  }

  createRabbit(group, x, y){
    var rabbit = group.create(x * this.map.fieldSize + this.map.halfFieldSize, y * this.map.fieldSize + this.map.halfFieldSize, 'rabbit');
    rabbit.scale.setTo(0.5);
    rabbit.anchor.set(0.5);
    this.assignRabbitMovement(rabbit);
  }

  assignRabbitMovement(rabbit){
    var d = 2;
    var direction = this.game.rnd.integerInRange(0,1);
    var rpos = this.map.relativePosition(rabbit.x, rabbit.y);
    var targetX, targetY;
    if(direction == 0) {
      targetX = this.game.rnd.integerInRange(rpos.x - d, rpos.x + d) * this.map.fieldSize + this.map.halfFieldSize;
      if(targetX < rabbit.x){
        rabbit.scale.x = -0.5;
      } else if (targetX > rabbit.x){
        rabbit.scale.x = 0.5;
      }
      targetY = rabbit.y;
    } else {
      targetY = this.game.rnd.integerInRange(rpos.y - d, rpos.y + d) * this.map.fieldSize + this.map.halfFieldSize;
      targetX = rabbit.x;
    }

    var delay = this.game.rnd.integerInRange(2000, 6000);
    var tween = this.game.add.tween(rabbit).to({x: targetX, y: targetY}, 3500, Phaser.Easing.Quadratic.InOut, true, delay); // what, duration, easing, autostart, delay
    tween.onStart.add(this.startRabbit, this);
    tween.onComplete.add(this.stopRabbit, this);
  }

  newXPos(currentX, d){
    var delta = this.game.rnd.integerInRange(1, d);

    for(var i = 0; i <= delta; i++){
      if(this.map.isWall(x + i, y)){
        return newX;
      }
      newX = x + i;
    }
    return newX;

    for(var i = 0; i >= delta; i--){
      if(this.map.isWall(x - i, y)){
        return newX;
      }
      newX = x - i;
    }
    return newX;

  }

  startRabbit(rabbit){
    //rabbit.animations.stop('Play');
    //rabbit.animations.play('Walk', 24, true);
  }

  stopRabbit(rabbit) {
    this.assignRabbitMovement(rabbit);
  }

}
