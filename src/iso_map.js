import { Dawning } from './namespace';

Dawning.IsoMap = class IsoMap {

  constructor(dawning, options) {
    this.dawning = dawning;
    this.game    = dawning.game;
    this.size = options.size;
    this.fieldSize = options.fieldSize;
    this.gutter = 5; // unknown gap
    this.halfFieldSize = this.fieldSize / 2;
    this.mapSize = this.size * this.fieldSize;

    this.mapData = new Dawning.MapData(this);
    this.visability = new Dawning.Visability(this.mapData);
    this.rabbitBuilder = new Dawning.Rabbit(this);
    this.pawnBuilder = new Dawning.Pawn(this);
    this.inputHandler = new Dawning.InputHandler(this);
    console.log(options);
  }

  preload() {
    this.game.plugins.add(new Phaser.Plugin.Isometric(this.game));

    this.game.world.setBounds(0, 0, this.size * this.fieldSize, this.size * this.fieldSize);

	  this.game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);

	  // set the middle of the world in the middle of the screen
	  this.game.iso.anchor.setTo(0.5, 0);

    this.game.load.image('field', 'images/iso_field.png');
    this.game.load.image('grass', 'images/iso_grass.png');
    this.game.load.image('forest', 'images/iso_forest.png');
    this.game.load.image('tree', 'images/iso_tree.png');

    this.game.load.image('banana1', 'images/banana-1@2x.png');
    this.game.load.image('banana2', 'images/banana-2@2x.png');
    this.game.load.image('banana3', 'images/banana-3@2x.png');
    this.game.load.image('leopard', 'images/leopard@2x.png');

    this.mapData.createData(Dawning.Data.map3);
    this.rabbitBuilder.preload();
    this.pawnBuilder.preload();
  }

  create() {

    this.floorGroup = this.game.add.group();
    this.floorGroup.enableBody = true;
    this.floorGroup.physicsBodyType = Phaser.Plugin.Isometric.ISOARCADE;

    this.isoGroup = this.game.add.group();

    this.forest  = [];
    this.fruits = [];
    this.herbivors = [];
    this.predators = [];

    this.createFields();
    this.visability.lowlightAll();

    var pos = this.mapPosition(12, 12);
    this.man = this.pawnBuilder.createMan(pos.x, pos.y, 12, 12);
    this.inputHandler.create();
  }

  createFields(){
    this.mapData.eachField((field, x, y) => {
      var pos = this.mapPosition(x, y);
      if (field.wall){
        this.createGrass(pos.x, pos.y, x, y, 'forest');
        this.createTree(pos.x, pos.y, x, y);
      } else {
        this.createGrass(pos.x, pos.y, x, y, 'grass');

        if(field.fruit){
          this.createFruit(pos.x, pos.y, x, y, field.fruit);
        } else if(field.predator){
          this.createLeopard(pos.x, pos.y, x, y);
        } else if(field.herbivor){
          this.rabbitBuilder.createRabbit(this.herbivors, pos.x, pos.y, x, y);
        }
      }
    });
  }

  createGrass(x, y, dataX, dataY, spriteName){
    var floorTile = this.game.add.isoSprite(x, y, 1, spriteName, 0, this.floorGroup);
    floorTile.anchor.set(0.5);
    this.game.physics.isoArcade.enable(floorTile);
    floorTile.body.immovable = true;
    this.mapData.addFloor(floorTile, dataX, dataY);
  }

  createTree(x, y, dataX, dataY){
    var tree = this.game.add.isoSprite(x -32, y -32, 0, 'tree', 0, this.isoGroup);
    this.forest.push(tree);
    tree.anchor.set(0.5);
    this.game.physics.isoArcade.enable(tree);
    tree.body.immovable = true;
    this.mapData.addObstacle(tree, dataX, dataY);
  }

  createFruit(x, y, dataX, dataY, type) {
    var fruit = this.game.add.isoSprite(x -30, y -20, 0, 'banana'+type, 0, this.isoGroup);
    this.fruits.push(fruit);
    this.game.physics.isoArcade.enable(fruit);
    fruit.anchor.set(0.5);
    fruit.scale.setTo(0.5);
    this.mapData.addThing(fruit, dataX, dataY);
  }

  createLeopard(x, y, dataX, dataY){
    var leopard = this.game.add.isoSprite(x -10, y -10, 0, 'leopard', 0, this.isoGroup);
    this.predators.push(leopard);
    this.game.physics.isoArcade.enable(leopard);
    leopard.anchor.set(0.5);
    leopard.scale.setTo(0.5);
    this.mapData.addThing(leopard, dataX, dataY);
  }

  mapPosition(x, y){
    return {
      x: x * this.fieldSize + y * this.gutter,
      y: y * this.fieldSize + x * this.gutter
    }
  }

  relativePosition(x, y){
    var divisor = Math.pow(this.fieldSize, 2) - Math.pow(this.gutter, 2);
    return {
      x: (x * this.fieldSize - y * this.gutter) / divisor,
      y: (y * this.fieldSize - x * this.gutter) / divisor
    }
  }

  update(){
    this.collisionDetection();
    this.inputHandler.moveWithCursor(this.man);
    this.game.iso.topologicalSort(this.isoGroup);
  }

  collisionDetection(){
    this.game.physics.isoArcade.collide(this.man.man, this.floorGroup);
    this.game.physics.isoArcade.collide(this.man.man, this.forest);

    this.game.physics.isoArcade.overlap(this.man.man, this.fruits, this.dawning.collectBanana, null, this.dawning);
    // this.game.physics.isoArcade.overlap(this.man.man, this.herbivors, this.rabbitBuilder.escape, null, this.rabbitBuilder);
    this.game.physics.isoArcade.overlap(this.man.man, this.predators, this.dawning.attacked, null, this.dawning);
  }

  render() {
    // this.floorGroup.forEach( (tile) => {
    //   this.game.debug.body(tile, 'rgba(189, 221, 235, 0.6)', false);
    // });
    // this.isoGroup.forEach( (tile) => {
    //   this.game.debug.body(tile, 'rgba(189, 221, 235, 0.6)', false);
    // });
  }

  isWall(x, y){
    return this.mapData.isWall(x, y);
  }

  isFree(x, y){
    return this.mapData.isFree(x, y);
  }

  getField(x, y){
    return this.mapData.getField(x, y);
  }

}
