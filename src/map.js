import { Dawning } from './namespace';

Dawning.Map = class Map {

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

  constructor(dawning, options){
    this.dawning = dawning;
    this.game = dawning.game;
    this.size = options.size;
    this.fieldSize = options.fieldSize;
    this.halfFieldSize = this.fieldSize / 2;
    this.mapSize = this.size * this.fieldSize;
    this.pawn = new Dawning.Pawn(this);
    this.rabbitBuilder = new Dawning.Rabbit(this);
    this.inputHandler = new Dawning.inputHandler(this);
  }

  preload(){
    this.game.load.image('1_grass', 'images/1_grass@2x.png');
    this.game.load.image('2_grass', 'images/2_grass@2x.png');
    this.game.load.image('3_grass', 'images/3_grass@2x.png');
    this.game.load.image('13_forest', 'images/13_forest@2x.png');
    this.game.load.image('banana1', 'images/banana-1@2x.png');
    this.game.load.image('banana2', 'images/banana-2@2x.png');
    this.game.load.image('banana3', 'images/banana-3@2x.png');
    this.game.load.image('leopard', 'images/leopard@2x.png');
    this.data = this.loadData3();
    this.pawn.preload();
    this.rabbitBuilder.preload();
  }

  create(){
    this.forest = this.game.add.group();
    this.forest.enableBody = true;

    this.ground = this.game.add.group();

    this.fruits = this.game.add.group();
    this.fruits.enableBody = true;

    this.predators = this.game.add.group();
    this.predators.enableBody = true;

    this.herbivors = this.game.add.group();
    this.herbivors.enableBody = true;

    this.createFields();
    this.maskGraphics = this.game.add.graphics(0, 0);
    this.man = this.pawn.createMan(12, 12);

    //this.forest.mask = this.maskGraphics;
    this.ground.mask = this.maskGraphics;
    this.fruits.mask = this.maskGraphics;
    this.predators.mask = this.maskGraphics;
    this.herbivors.mask = this.maskGraphics;

    this.inputHandler.create();
  }

  createFields(){
    this.data.forEach((row, y) => {
      row.forEach((field, x) => {
        if (field == 'x'){
          this.createTree(x, y);
        } else {
          this.createGrass(x, y);
          if (field == '1' || field == '2' || field == '3'){
            this.createFruit(x, y, field);
          } else if(field == 'L') {
            this.createLeopard(x, y);
          } else if(field == 'R') {
            this.rabbitBuilder.createRabbit(this.herbivors, x, y);
          }
        }
      });
    });
  }

  createTree(x, y){
    var tree = this.forest.create(x * this.fieldSize, y * this.fieldSize, '13_forest');
    tree.scale.setTo(0.5);
    tree.body.immovable = true;
  }

  createGrass(x, y){
    var grass = this.ground.create(x * this.fieldSize, y * this.fieldSize, '3_grass');
    grass.scale.setTo(0.5);
  }

  createLeopard(x, y){
    var leopard = this.predators.create(x * this.fieldSize + this.halfFieldSize, y * this.fieldSize + this.halfFieldSize, 'leopard');
    leopard.anchor.set(0.5);
    leopard.scale.setTo(0.5);
  }

  createFruit(x, y, type) {
    var fruit = this.fruits.create(x * this.fieldSize, y * this.fieldSize, 'banana'+type);
    fruit.scale.setTo(0.5);
  }

  isWall(x, y){
    if (this.data[y] === undefined) return true;
    return this.data[y][x] == 'x';
  }

  update(){
    this.collisionDetection();
    this.inputHandler.moveWithCursor(this.man.man);
  }

  collisionDetection(){
    this.game.physics.arcade.collide(this.man.man, this.forest);

    this.game.physics.arcade.overlap(this.man.man, this.fruits, this.dawning.collectBanana, null, this.dawning);
    this.game.physics.arcade.overlap(this.man.man, this.predators, this.dawning.attacked, null, this.dawning);
  }

  relativePosition(ax, ay){
    return { x: (ax - this.halfFieldSize) / this.fieldSize, y: (ay - this.halfFieldSize) / this.fieldSize };
  }

}
