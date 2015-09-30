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
          visible: false
        }
        this.fields[y][x] = field;
      })
    })
  }

  eachField(callback){
    this.fields.forEach((row, y) => {
      row.forEach((field, x) => {
        callback(field);
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

  isVisible(x, y){
    return this.fieldProperty(x, y, false, function(field){
      return field.visible;
    });
  }

  setAllInvisible(){
    this.eachField(function(field){
      field.visible = false;
    });
  }

  setVisible(x, y, value){
    if (this.fields[y] !== undefined){
      if (this.fields[y][x] !== undefined){
        this.fields[y][x].visible = value
      }
    }
  }

}
