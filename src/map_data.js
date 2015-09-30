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
    this.data.forEach((row, y) => {
      row.forEach((field, x) => {
        callback(x,y);
      })
    })
  }

  getField(x, y){
    if (this.fields[y] === undefined) return null;
    return this.fields[y][x];
  }

  fieldProperty(x, y, outsideValue, callback){
    if (this.fields[y] === undefined) return outsideValue;
    return callback(this.fields[y][x]);
  }

  isWall(x, y){
    this.fieldProperty(x, y, true, function(field){
      return field.wall;
    });
  }

  isVisible(x, y){
    this.fieldProperty(x, y, false, function(field){
      return field.visible;
    });
  }

  setVisible(value){
    this.fields[y][x].visible = value
  }

}
