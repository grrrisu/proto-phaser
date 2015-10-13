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
    var direction = this.game.rnd.integerInRange(0,1);
    var delta = this.game.rnd.integerInRange(-3, 3);
    var rpos = this.map.relativePosition(rabbit.x, rabbit.y);
    var targetX, targetY;
    if(direction == 0) {
      var newX = this.checkFields(rpos.x, delta, (newX) => {
        return this.map.isWall(newX, rpos.y);
      });
      targetX = newX * this.map.fieldSize + this.map.halfFieldSize;
      if(targetX < rabbit.x){
        rabbit.scale.x = -0.5;
      } else if (targetX > rabbit.x){
        rabbit.scale.x = 0.5;
      }
      targetY = rabbit.y;
    } else {
      var newY = this.checkFields(rpos.y, delta, (newY) => {
        return this.map.isWall(rpos.x, newY);
      });
      targetY = newY * this.map.fieldSize + this.map.halfFieldSize;
      targetX = rabbit.x;
    }

    var delay = this.game.rnd.integerInRange(2000, 6000);
    var tween = this.game.add.tween(rabbit).to({x: targetX, y: targetY}, 3500, Phaser.Easing.Quadratic.InOut, true, delay); // what, duration, easing, autostart, delay
    rabbit.tween = tween;
    tween.onStart.add(this.startRabbit, this);
    tween.onComplete.add(this.stopRabbit, this);
  }

  checkFields(pos, target, stopCondition){
    var currentPos = pos
    for(var i = 0; i <= Math.abs(target); i++){
      var step = target > 0 ? i : -i;
      if(stopCondition(pos + step)){
        return currentPos;
      }
      currentPos = pos + step;
    }
    return currentPos;
  }

  startRabbit(rabbit){
    //rabbit.animations.stop('Play');
    //rabbit.animations.play('Walk', 24, true);
  }

  stopRabbit(rabbit) {
    this.assignRabbitMovement(rabbit);
  }

  escape(man, rabbit){
    if(!rabbit.escaping){
      //Phaser.TweenManager.remove(rabbit.tween);
      var rpos = this.map.relativePosition(rabbit.x, rabbit.y);
      var freeFields = [];
      this.map.rayCast(rpos, 1, (targetX, targetY) => {
        if(this.map.isFree(targetX, targetY)){
          freeFields.push({x: targetX, y:targetY});
        }
      });
      var freeField = this.game.rnd.pick(freeFields);
      var targetX = freeField.x * this.map.fieldSize + this.map.halfFieldSize;
      var targetY = freeField.y * this.map.fieldSize + this.map.halfFieldSize;
      var tween = this.game.add.tween(rabbit).to({x: targetX, y: targetY}, 1500, Phaser.Easing.Quadratic.InOut, true);
      tween.onStart.add(this.startEscaping, this);
      tween.onComplete.add(this.stopEscaping, this);
    }
  }

  startEscaping(rabbit){
    rabbit.escaping = true;
  }

  stopEscaping(rabbit){
    rabbit.escaping = false;
  }

}
