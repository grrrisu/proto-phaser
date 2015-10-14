import { Dawning } from './namespace';

Dawning.IsoMap = class IsoMap extends Dawning.Map {

  preload() {
    this.game.plugins.add(new Phaser.Plugin.Isometric(this.game));

    this.game.world.setBounds(0, 0, 2048, 1024);

	  // Start the physical system
	  this.game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);

	  // set the middle of the world in the middle of the screen
	  this.game.iso.anchor.setTo(0.5, 0);

    this.game.load.image('field', 'images/iso_field.png');
    this.game.load.image('grass', 'images/iso_grass.png');
    this.game.load.image('forest', 'images/iso_forest.png');
  }

  create() {

  }

}
