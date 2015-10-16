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
          sprites: []
        }
        this.fields[y][x] = field;
      })
    })
  }

  addSprite(sprite, x, y){
    var field = this.getField(x, y);
    if(field){
      field.sprites.push(sprite);
    }
  }

  removeSprite(x, y){

  }

  highlight(x, y){
    var field = this.getField(x, y);
    if(field){
      field.sprites.forEach((sprite) => {
        sprite.tint = 0xffffff;
      });
    }
  }

  lowlightField(field){
    field.sprites.forEach((sprite) => {
      sprite.tint = 0x666666;
    });
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
      field.visible = false;
      this.lowlightField(field);
    });
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
