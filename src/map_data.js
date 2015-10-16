import { Dawning } from './namespace';

Dawning.MapData = class MapData {

  constructor(map) {
    this.map = map;
    this.game = map.game;
    this.fields = [];
    for(var y = 0; y < map.size; y++){
      this.fields[y] = new Array(map.size);
    }
  }

  createData(data){
    data.forEach((row, y) => {
      row.forEach((field, x) => {
        field = {
          x: x,
          y: y,
          wall: data[y][x] == 'x',
          fruit: this.parseFruit(data[y][x]),
          herbivor: data[y][x] == 'R',
          predator: data[y][x] == 'L',
          pawn: false,
          visible: false,
          wasVisible: false,
          floors: [],
          obstacles: [],
          things: []
        }
        this.fields[y][x] = field;
      })
    })
  }

  addFloor(sprite, x, y){
    var field = this.getField(x, y);
    if(field){
      field.floors.push(sprite);
      sprite.field = field;
    }
  }

  addObstacle(sprite, x, y){
    var field = this.getField(x, y);
    if(field){
      field.obstacles.push(sprite);
      sprite.field = field;
    }
  }

  addThing(sprite, x, y){
    var field = this.getField(x, y);
    if(field){
      field.things.push(sprite);
      sprite.field = field;
    }
  }

  removeFloor(sprite){
    var field = sprite.field;
    var pos = field.floors.indexOf(sprite);
    if (pos > -1){
      field.floors.splice(pos, 1);
      sprite.field = null;
    }
  }

  removeObstacle(sprite){
    var field = sprite.field;
    var pos = field.obstacles.indexOf(sprite);
    if (pos > -1){
      field.obstacles.splice(pos, 1);
      sprite.field = null;
    }
  }

  removeThing(sprite){
    var field = sprite.field;
    var pos = field.things.indexOf(sprite);
    if (pos > -1){
      field.things.splice(pos, 1);
      sprite.field = null;
    }
  }

  highlightField(field){
    field.floors.forEach((sprite) => {
      this.darkenSprite(sprite, 6, 0);
    });
    field.obstacles.forEach((sprite) => {
      this.darkenSprite(sprite, 6, 0);
    });
    this.highlightThings(field);
  }

  highlightThings(field){
    field.things.forEach((sprite) => {
      this.game.add.tween(sprite).to({alpha: 1.0}, 500, Phaser.Easing.Quadratic.InOut, true);
    });
  }

  highlight(x, y){
    var field = this.getField(x, y);
    if(field){
      this.highlightField(field);
    }
  }

  lowlightField(field){
    field.floors.forEach((sprite) => {
      this.darkenSprite(sprite, 0, 6);
    });
    field.obstacles.forEach((sprite) => {
      this.darkenSprite(sprite, 0, 6);
    });
    this.lowlightThings(field);
  }

  lowlightThings(field){
    field.things.forEach((sprite) => {
      this.game.add.tween(sprite).to({alpha: 0.0}, 500, Phaser.Easing.Quadratic.InOut, true);
    });
  }

  darkenSprite(sprite, startValue, endValue){
    var darkness = [0xffffff, 0xdddddd, 0xcccccc, 0xbbbbbb, 0xaaaaaa, 0x999999, 0x888888];
    var colorBlend = {step: startValue};
    // create the tween on this object and tween its step property to 100
    var colorTween = this.game.add.tween(colorBlend).to({step: endValue}, 500);
    // run the interpolateColor function every time the tween updates, feeding it the
    // updated value of our tween each time, and set the result as our tint
    colorTween.onUpdateCallback(function() {
      sprite.tint = darkness[Math.round(colorBlend.step)];
    });
    // start the tween
    colorTween.start();
  }

  lowlight(x, y){
    var field = this.getField(x, y);
    if(field){
      this.lowlightField(field);
    }
  }

  lowlightAll(){
    this.eachField((field, x, y) => {
      this.lowlightField(field);
    });
  }

  applyThingVisability(x, y){
    var field = this.getField(x, y);
    if(field){
      if(field.visible){
        this.highlightThings(field);
      } else {
        this.lowlightThings(field);
      }
    }
  }

  parseFruit(fruit){
    if (fruit == '1' || fruit == '2' || fruit == '3'){
      return fruit;
    }
  }

  eachField(callback){
    this.fields.forEach((row, y) => {
      row.forEach((field, x) => {
        callback(field, x, y);
      })
    })
  }

  getField(x, y){
    if (this.fields[y] === undefined) return null;
    if (this.fields[y][x] === undefined) return null;
    return this.fields[y][x];
  }

  fieldProperty(x, y, outsideValue, callback){
    if (this.fields[y] === undefined) return outsideValue;
    if (this.fields[y][x] === undefined) return outsideValue;
    return callback(this.fields[y][x]);
  }

  isWall(x, y){
    return this.fieldProperty(x, y, true, function(field){
      return field.wall;
    });
  }

  isFree(x, y){
    return this.fieldProperty(x, y, false, function(field){
      return !field.wall && !field.herbivor && !field.predator && !field.pawn;
    });
  }

  isVisible(x, y){
    return this.fieldProperty(x, y, false, function(field){
      return field.visible;
    });
  }

  setAllInvisible(){
    this.eachField((field) => {
      if(field.visible){
        field.wasVisible = true;
      }
      field.visible = false;
    });
  }

  lowlightPreviousVisibles(){
    this.eachField((field) => {
      if(field.wasVisible && !field.visible){
        this.lowlightField(field);
      } else if (field.visible && !field.wasVisible){
        this.highlightField(field);
      }
      field.wasVisible = false;
    })
  }

  setVisible(x, y, value){
    if (this.fields[y] !== undefined){
      if (this.fields[y][x] !== undefined){
        this.fields[y][x].visible = value
      }
    }
  }

  rayCast(rpos, rayLength, callback) {
    var numberOfRays = 96;
    for(var i = 0; i < numberOfRays; i++){
      var rayAngle = (Math.PI * 2 / numberOfRays) * i
      for(var j= 0; j <= rayLength; j+=1){
        var landingX = Math.round(rpos.x - j * Math.cos(rayAngle));
        var landingY = Math.round(rpos.y - j * Math.sin(rayAngle));

        callback(landingX, landingY);

        if(this.isWall(landingX, landingY)){
          break;
        }
      }
    }
  }

}
