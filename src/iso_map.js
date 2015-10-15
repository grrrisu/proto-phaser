import { Dawning } from './namespace';

Dawning.IsoMap = class IsoMap {

  constructor(dawning, options) {
    this.dawning = dawning;
    this.game    = dawning.game;
    this.size = options.size;
    this.fieldSize = 68; //options.fieldSize;
    this.gutter = 5; // unknown gap
    this.halfFieldSize = this.fieldSize / 2;
    this.mapSize = this.size * this.fieldSize;

    this.mapData = new Dawning.MapData(this);
    this.pawnBuilder = new Dawning.Pawn(this);
    this.inputHandler = new Dawning.InputHandler(this);
    console.log(options);
  }

  preload() {
    this.game.plugins.add(new Phaser.Plugin.Isometric(this.game));

    this.game.world.setBounds(0, 0, this.size * this.fieldSize, this.size * this.fieldSize);

	  // Start the physical system
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
    this.pawnBuilder.preload();
  }

  create() {

    this.floorGroup = this.game.add.group();
    this.floorGroup.enableBody = true;
    this.floorGroup.physicsBodyType = Phaser.Plugin.Isometric.ISOARCADE;

    this.isoGroup = this.game.add.group();
    this.isoGroup.enableBody = true;
    this.isoGroup.physicsBodyType = Phaser.Plugin.Isometric.ISOARCADE;

    this.forest  = [];
    this.fruits = [];
    this.createFields();

    var pos = this.mapPos(12, 12);
    this.man = this.pawnBuilder.createMan(pos.x, pos.y);
    this.inputHandler.create();
  }

  createFields(){
    this.mapData.eachField((field, x, y) => {
      var pos = this.mapPos(x, y);
      if (field.wall){
        this.createGrass(pos.x, pos.y, 'forest');
        this.createTree(pos.x, pos.y);
      } else {
        this.createGrass(pos.x, pos.y, 'grass');

        if(field.fruit){
          this.createFruit(pos.x, pos.y, field.fruit);
        } else if(field.predator){
          //this.createLeopard(x, y);
        } else if(field.herbivor){
          //this.rabbitBuilder.createRabbit(this.herbivors, x, y);
        }
      }
    });
  }

  createGrass(x, y, spriteName){
    var floorTile = this.game.add.isoSprite(x, y, 1, spriteName, 0, this.floorGroup);
    floorTile.anchor.set(0.5);
    floorTile.body.immovable = true;
    this.game.physics.isoArcade.enable(floorTile);
  }

  createTree(x, y){
    var tree = this.game.add.isoSprite(x -32, y -32, 0, 'tree', 0, this.isoGroup);
    this.forest.push(tree);
    tree.anchor.set(0.5);
    this.game.physics.isoArcade.enable(tree);
    tree.body.immovable = true;
  }

  createFruit(x, y, type) {
    var fruit = this.game.add.isoSprite(x -60, y -30, 0, 'banana'+type, 0, this.isoGroup);
    this.fruits.push(fruit);
    fruit.scale.setTo(0.5);
    fruit.body.immovable = true;
    this.game.physics.isoArcade.enable(fruit);
  }

  mapPos(x, y){
    return {
      x: x * this.fieldSize + y * this.gutter,
      y: y * this.fieldSize + x * this.gutter
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
    // this.game.physics.isoArcade.overlap(this.man.man, this.predators, this.dawning.attacked, null, this.dawning);
  }

  render() {
    // this.floorGroup.forEach( (tile) => {
    //   this.game.debug.body(tile, 'rgba(189, 221, 235, 0.6)', false);
    // });
    // this.isoGroup.forEach( (tile) => {
    //   this.game.debug.body(tile, 'rgba(189, 221, 235, 0.6)', false);
    // });
  }

}
