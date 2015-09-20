class DawningMap {

  // legend
  // x : forest
  // . : empty (ground)
  // 1-3: fruits
  // R : rabbit
  // L : leopard

  loadData1() {
    return [
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', '.', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', '.', '.', '.', '.', '.', '3', '.', '.', '.', '.', '.', '.', '.', 'x'],
      ['x', '.', '.', '1', '.', '.', '.', '.', 'R', '.', '.', '2', '.', '.', 'x'],
      ['x', '.', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', '.', 'x'],
      ['x', '.', '.', '.', '1', '.', '.', '.', '.', '.', '2', '.', '.', '.', 'x'],
      ['x', '3', '.', 'R', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'x'],
      ['x', '.', 'x', '.', '.', 'x', '.', '.', '.', 'x', 'x', '.', 'x', '.', 'x'],
      ['.', '.', 'x', '.', '.', 'x', '.', '.', '.', 'x', '.', '3', 'x', '.', '.'],
      ['x', '.', 'x', '.', '.', 'x', 'x', 'x', 'x', 'x', '.', 'x', 'x', '2', 'x'],
      ['x', 'L', 'x', '1', '.', '.', '.', 'x', '.', 'x', '1', '.', 'x', '.', 'x'],
      ['x', '.', '.', '.', '.', '.', '.', 'x', '.', '.', '.', '.', 'x', '.', 'x'],
      ['x', '.', '.', '.', 'x', '.', '.', 'x', '1', '.', 'x', 'x', 'x', 'x', 'x'],
      ['x', '.', '.', '.', 'x', '.', 'R', '.', '.', '.', '.', '.', '.', '.', 'x'],
      ['x', '.', '.', '2', 'x', '1', '.', '.', '2', '.', '.', '.', '.', '3', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', '.', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
    ];
  }

  loadData2() {
    return [
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', '.', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', '.', '.', '.', '2', 'x', '.', '.', '.', '.', 'x', '.', '.', '2', '.', '.', '.', '.', '.', '.', '1', 'x', '.', '.', 'x'],
      ['x', '.', '.', '.', '.', 'x', '.', '.', '.', '.', 'x', '.', '.', 'x', 'x', 'x', 'x', '.', 'L', '.', '.', 'x', '.', 'R', 'x'],
      ['x', '.', '1', 'x', 'x', 'x', '2', 'x', '.', '.', '.', '.', '.', '.', '.', '.', 'x', '.', '.', '.', '.', 'x', '.', '.', 'x'],
      ['x', '.', '.', '.', '.', '.', '.', 'x', '.', '.', '1', '.', '.', 'x', '.', '.', 'x', '.', '.', 'x', '.', '.', '1', '.', 'x'],
      ['x', 'R', '.', '.', '.', 'x', 'x', 'x', '.', '.', '.', '.', '.', 'x', '.', '1', '.', '.', '.', 'x', '.', '.', '.', '.', 'x'],
      ['x', '.', '.', '.', '.', 'x', '.', '.', '.', '.', '.', '.', '.', 'x', 'x', 'x', 'x', '2', '.', 'x', '.', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'x', 'x', '.', 'x', '.', '1', '.', 'R', '.', '.', '.', 'x', '3', '.', '.', '.', '.', 'x', '.', '.', '.', '.', 'x'],
      ['x', '.', '.', '.', '.', 'x', '.', '.', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', '.', 'R', '.', 'x'],
      ['x', '.', '.', '.', '.', 'x', '.', '.', '.', '3', '.', '.', 'R', '.', '.', '.', '.', 'x', '.', '.', '.', '.', '.', '1', 'x'],
      ['x', '.', '.', '.', '3', 'x', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'x', '.', '.', '.', 'x', 'x', 'x', 'x'],
      ['x', '1', 'x', 'x', 'x', 'x', 'R', 'x', '.', '.', 'x', '.', '.', '.', 'x', '.', '.', 'x', 'x', 'x', '.', '.', '.', '.', 'x'],
      ['.', '.', '.', 'x', '.', '.', '.', 'x', '.', '.', 'x', '.', '.', '.', 'x', '.', '.', '.', '.', '.', '.', '3', '.', '2', '.'],
      ['x', '.', '.', 'x', '.', '.', '.', 'x', '.', '1', 'x', 'x', 'x', 'x', 'x', '.', '.', '1', '.', 'x', 'x', 'x', '.', '.', 'x'],
      ['x', '.', '.', 'x', '.', '1', '.', '.', '.', '.', 'x', '.', '.', '.', '1', '.', 'x', '.', '.', '.', '.', 'x', '.', '.', 'x'],
      ['x', '2', '.', '.', '.', '.', '.', '.', '.', '.', 'x', '3', '.', '.', '.', '.', 'x', '.', 'R', '.', '.', '.', '.', '.', 'x'],
      ['x', 'x', 'x', 'x', '.', 'x', 'x', 'x', '.', '.', 'x', 'x', 'x', 'x', '.', '.', 'x', 'x', 'x', 'x', '.', '.', 'x', '.', 'x'],
      ['x', '.', 'x', '.', '.', 'x', '2', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'x', '.', '.', '.', '.', 'R', 'x', '1', 'x'],
      ['x', '.', 'x', 'R', '.', 'x', '.', '.', '.', '.', 'x', '1', '.', '.', '.', '.', '.', '.', '1', '.', '.', '.', 'x', '.', 'x'],
      ['x', '.', '.', '.', '.', '.', '.', 'x', '1', '.', 'x', '.', 'x', 'x', 'x', 'x', '.', '.', '.', 'x', 'x', 'x', 'x', '.', 'x'],
      ['x', 'x', 'x', 'x', '.', '.', '.', 'x', '.', 'R', 'x', '.', '.', '.', '2', 'x', '1', '.', '.', '.', '.', '2', '.', '.', 'x'],
      ['x', '1', '.', '.', '.', 'x', 'x', 'x', '.', '.', 'x', 'x', 'x', '.', '.', '.', '.', '.', 'x', '.', '.', 'x', 'x', 'x', 'x'],
      ['x', '.', 'x', '.', '.', 'x', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'x', 'x', 'x', 'x', '.', '.', '.', '.', '.', 'x'],
      ['x', '.', 'x', '.', '1', '.', '.', 'x', '.', '.', 'x', '.', '.', '.', '.', '.', 'R', '.', 'x', '.', '.', '.', 'R', '3', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', '.', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    ];
  }

  loadData3(){
    return [
      ['x', 'x', 'x', 'x', 'x', 'x', '.', 'x', 'x', 'x', 'x', 'x', '.', 'x', 'x', 'x', 'x', 'x', '.', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['x', '2', '.', 'x', '.', '.', '.', '.', 'x', '.', '.', '.', '.', '.', '.', '.', '.', 'x', '.', '.', '.', '.', 'x', '.', 'x'],
      ['x', '.', '.', 'x', 'x', '.', '.', 'x', 'x', 'x', '.', 'x', 'x', 'x', '.', '.', '3', 'x', 'x', 'x', '.', '.', 'x', '2', 'x'],
      ['x', '.', 'R', '.', '.', '.', '.', '.', '1', '.', '.', '.', '.', 'x', '.', 'x', 'x', 'x', '.', '.', '.', '.', '.', '.', 'x'],
      ['x', 'x', 'x', '.', 'x', 'x', 'x', '.', 'x', 'x', 'x', 'x', '.', 'x', 'R', '.', '.', '.', '.', '.', '.', 'x', '.', '.', 'x'],
      ['x', '.', 'x', '.', '.', 'x', '3', '.', 'x', '.', '.', 'x', '2', '.', '.', '1', 'x', 'x', '.', '.', 'x', 'x', '.', '.', 'x'],
      ['.', '.', 'x', '.', '.', '.', '.', '.', 'x', '.', '.', 'x', '.', '.', '.', '.', '.', 'x', '.', '.', 'x', '.', '.', '.', '.'],
      ['x', '.', 'x', '.', '.', 'x', '.', '.', '.', '.', 'R', '.', '.', 'x', '.', '.', '.', 'x', '.', '1', 'x', '.', '.', '.', 'x'],
      ['x', '1', '.', '.', 'x', 'x', '.', 'x', '.', '.', 'x', 'x', 'x', 'x', 'x', 'x', '.', '.', '.', '.', '.', '.', 'L', '.', 'x'],
      ['x', '.', 'x', '.', '.', '.', '.', 'x', '.', '.', '.', 'x', '1', '.', '.', 'x', '.', '.', '.', '.', '.', '.', 'x', 'x', 'x'],
      ['x', '.', 'x', 'x', '.', '.', 'x', 'x', 'x', 'x', '.', '.', '.', '.', '.', '.', '.', 'x', 'x', 'x', '.', '.', 'x', '3', 'x'],
      ['x', '.', '.', '.', '.', '.', '.', 'x', '.', '.', 'R', '.', '.', 'x', 'x', '.', '.', '.', 'x', '.', '.', '.', 'x', '.', 'x'],
      ['.', '.', '.', 'x', 'x', '.', '.', '.', '.', 'x', 'x', '.', '.', '.', 'x', 'x', 'x', '.', 'x', '.', 'R', '.', '.', '.', '.'],
      ['x', '.', '.', '.', 'x', '.', '.', 'x', '1', '.', 'x', '.', '.', '.', 'x', '.', '.', '.', 'x', '.', 'x', 'x', '.', '.', 'x'],
      ['x', '2', '.', '.', 'x', '.', 'x', 'x', 'x', '.', 'x', 'x', 'x', 'x', 'x', '1', '.', '.', '.', '.', '.', 'x', '.', '.', 'x'],
      ['x', '.', '.', '1', 'x', '.', '2', 'x', '.', '.', 'x', '3', '.', 'x', 'x', 'x', 'x', '.', '.', '.', '.', '.', '.', '2', 'x'],
      ['x', '.', '.', 'x', 'x', 'x', '.', '.', '.', 'x', 'x', '.', '.', '.', '.', '.', '.', '.', 'x', '1', '.', 'x', 'x', 'x', 'x'],
      ['x', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'x', '.', 'x', '.', '.', 'x', '2', '.', 'x', '.', '.', '.', '.', '.', 'x'],
      ['.', '.', 'R', '.', 'x', '.', '.', '.', 'x', '.', '.', '.', 'x', '.', '.', 'x', 'x', 'x', 'x', 'x', 'x', '.', 'x', '.', '.'],
      ['x', 'x', 'x', '.', 'x', 'x', '.', 'x', 'x', '.', 'x', '.', 'x', '.', 'x', 'x', '.', '.', '.', '.', '.', '.', 'x', '.', 'x'],
      ['x', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'x', 'R', '.', '.', '.', '.', '.', 'x', '.', '.', '.', '1', 'x', '.', 'x'],
      ['x', '.', 'x', 'x', '.', 'x', 'x', 'x', '.', 'x', 'x', 'x', '.', '.', '.', '.', '1', 'x', 'x', '.', '.', 'x', 'x', 'x', 'x'],
      ['x', '.', '.', 'x', '.', '3', 'x', '.', '.', '.', '.', '.', '.', '.', 'x', '.', 'x', 'x', '.', '.', '.', '.', 'x', '.', 'x'],
      ['x', '3', '.', 'x', '.', '.', '.', '.', '1', '.', 'x', '1', '.', '.', 'x', 'R', '.', '.', '.', '.', 'x', '2', '.', '3', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', '.', 'x', 'x', 'x', 'x', 'x', '.', 'x', 'x', 'x', 'x', 'x', '.', 'x', 'x', 'x', 'x', 'x', 'x'],
    ];
  }

  constructor(dawning){
    this.dawning = dawning;
    this.game = dawning.game;
  }

  preload(){
    this.game.load.image('1_grass', 'images/1_grass@2x.png');
    this.game.load.image('2_grass', 'images/2_grass@2x.png');
    this.game.load.image('3_grass', 'images/3_grass@2x.png');
    this.game.load.image('13_forest', 'images/13_forest@2x.png');
    this.game.load.image('banana1', 'images/banana-1@2x.png');
    this.game.load.image('banana2', 'images/banana-2@2x.png');
    this.game.load.image('banana3', 'images/banana-3@2x.png');
    this.data = this.loadData3();
  }

  create(){
    this.data.forEach((row, y) => {
      row.forEach((field, x) => {
        if (field == 'x'){
          this.dawning.createTree(x, y);
        } else {
          this.dawning.createGrass(x, y);
          if (field == '1' || field == '2' || field == '3'){
            this.dawning.createFruit(x, y, field);
          } else if(field == 'L') {
            this.dawning.createLeopard(x, y);
          } else if(field == 'R') {
            this.dawning.createRabbit(x, y);
          }
        }
      });
    });
  }

  isWall(x, y){
    if (this.data[y] === undefined) return true;
    return this.data[y][x] == 'x';
  }

}

export { DawningMap };
