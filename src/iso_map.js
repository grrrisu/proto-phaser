import { Dawning } from './namespace';

Dawning.IsoMap = class IsoMap {

  constructor(dawning, options) {
    this.dawning = dawning;
    this.game    = dawning.game;
    this.size = options.size;
    this.fieldSize = 68; //options.fieldSize;
    this.gutter = 0; // unknown gap
    this.halfFieldSize = this.fieldSize / 2;
    this.mapSize = this.size * this.fieldSize;

    this.mapData = new Dawning.MapData(this);
    console.log(options);
  }

  preload() {
    this.game.plugins.add(new Phaser.Plugin.Isometric(this.game));

    this.game.world.setBounds(0, 0, this.size * this.fieldSize, this.size * this.fieldSize);

	  // Start the physical system
	  this.game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);

	  // set the middle of the world in the middle of the screen
	  this.game.iso.anchor.setTo(0.5, -0.5);

    this.game.load.image('field', 'images/iso_field.png');
    this.game.load.image('grass', 'images/iso_grass.png');
    this.game.load.image('forest', 'images/iso_forest.png');
    this.game.load.image('tree', 'images/iso_tree.png');

    this.mapData.createData(Dawning.Data.map3);
  }

  create() {

    this.floorGroup = this.game.add.group();
    this.floorGroup.enableBody = true;
    this.floorGroup.physicsBodyType = Phaser.Plugin.Isometric.ISOARCADE;

    this.forestGroup = this.game.add.group();
    this.forestGroup.enableBody = true;
    this.forestGroup.physicsBodyType = Phaser.Plugin.Isometric.ISOARCADE;

    this.createFields();
  }

  createFields(){
    this.mapData.eachField((field, x, y) => {
      var pos = this.mapPos(x, y);
      if (field.wall){
        this.createGrass(pos.x, pos.y, 'forest');
        this.createTree(pos.x, pos.y);
      } else {
        this.createGrass(pos.x, pos.y, 'grass');
      }
      // if (field.wall){
      //   this.createTree(x, y);
      // } else {
      //   if(field.fruit){
      //     this.createFruit(x, y, field.fruit);
      //   } else if(field.predator){
      //     this.createLeopard(x, y);
      //   } else if(field.herbivor){
      //     this.rabbitBuilder.createRabbit(this.herbivors, x, y);
      //   }
      // }
    });
  }

  createGrass(x, y, spriteName){
    var floorTile = this.game.add.isoSprite(x, y, 1, spriteName, 0, this.floorGroup);
    floorTile.anchor.set(0.5);
  }

  createTree(x, y){
    var tree = this.game.add.isoSprite(x, y, 32, 'tree', 0, this.forestGroup);
    tree.anchor.set(0.5);
  }

  mapPos(x, y){
    return {
      x: x * this.fieldSize + x * this.gutter,
      y: y * this.fieldSize + y * this.gutter
    }
  }

  update(){

  }

  render() {
    // this.floorGroup.forEach( (tile) => {
    //   this.game.debug.body(tile, 'rgba(189, 221, 235, 0.6)', false);
    // });
    // this.forestGroup.forEach( (tile) => {
    //   this.game.debug.body(tile, 'rgba(189, 221, 235, 0.6)', false);
    // });
  }

}
