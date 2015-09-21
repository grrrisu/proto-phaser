import { Dawning } from './namespace';

Dawning.Game = class Game {

  getFogSrc(){
    // form http://glslsandbox.com/e#27661.0
    return [
      "#ifdef GL_ES",
      "precision mediump float;",
      "#endif",

      "uniform float time;",
      "uniform vec2 mouse;",
      "uniform vec2 resolution;",

      "const int oct = 8;",
      "const float per = 0.5;",
      "const float PI = 3.1415926;",
      "const float cCorners = 1.0/16.0;",
      "const float cSides = 1.0/8.0;",
      "const float cCenter = 1.0/4.0;",

      "float interpolate(float a, float b, float x){",
        "float f = (1.0 - cos(x*PI))*0.5;",
        "return a * (1.0 - f) + b * f;",
      "}",

      "float rnd(vec2 p){",
        "return fract(sin(dot(p, vec2(12.9898, 78.233)))*43758.5453);",
      "}",

      "float irnd(vec2 p){",
        "vec2 i = floor(p);",
        "vec2 f = fract(p);",
        "vec4 v = vec4(rnd(vec2(i.x, i.y)),",
               "rnd(vec2(i.x+1.0, i.y)),",
               "rnd(vec2(i.x, i.y+1.0)),",
               "rnd(vec2(i.x+1.0, i.y+1.0)));",
        "return interpolate(interpolate(v.x, v.y, f.x), interpolate(v.z, v.w, f.x), f.y);",
      "}",

      "float noise(vec2 p){",
        "float t = 0.0;",
        "for(int i = 0; i < oct; i++){",
          "float freq = pow(2.0, float(i));",
          "float amp = pow(per, float(oct-i));",
          "t += irnd(vec2(p.x/freq, p.y/freq))*amp;",
        "}",
        "return t;",
      "}",

      "void main( void ) {",
        "vec2 t = gl_FragCoord.xy + vec2(time*10.0);",
        "float n = noise(t);",

        "gl_FragColor = vec4(vec3(n), 1.0);",
      "}"
    ]
  }

  constructor(options){
    this.game = new Phaser.Game(
          options.width,
          options.height,
          Phaser.AUTO,
          options.element,
          this
    );
    this.size = options.size;
    this.fieldSize = options.fieldSize;
    this.mapSize = this.size * this.fieldSize;
    this.foodCollected = 0;

    this.map = new Dawning.Map(this);
  }

  preload(){
    this.game.load.image('leopard', 'images/leopard@2x.png');
    this.game.load.image('rabbit', 'images/rabbit@2x.png');

    //this.game.load.audio('rainforest', 'audio/Rainforest.mp3');
    //this.game.load.audio('birds', 'audio/Birds_In_Forest.mp3');
    //this.game.load.audio('jungle', 'audio/Jungle.mp3');
    this.game.load.audio('rainforest', 'audio/rainforest_ambience.mp3');
    this.game.load.audio('footsteps', 'audio/footsteps_dry_wheat.mp3');

    this.map.preload();
  }

  create(){
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    this.game.world.setBounds(0, 0, 25 * 55, 25 * 55);

    this.createFog(25 * 55, 25 * 55);
    var background = this.game.add.tileSprite(0, 0, 25 * 55, 25 * 55, '3_grass');
    //background.tint = 0x999999;
    background.alpha = 0.6;

    this.map.create();

    this.foodScore = this.game.add.text(0, 0, "Food: 0", { font: "32px Arial", fill: "#ffffff", align: "center" });
    this.foodScore.fixedToCamera = true;

    var backgroundSound = this.game.add.audio('rainforest', 0.1, true); // key, volume, loop
    var footstepsSound  = this.game.add.audio('footsteps', 1.0,  true);
    backgroundSound.play();
  }

  createFog(width, height){
    this.fogFilter = new Phaser.Filter(this.game, null, this.getFogSrc());
    this.fogFilter.setResolution(800, 600);

    var fog = this.game.add.sprite();
    fog.width = width;
    fog.height = height;
    fog.alpha = 0.1;
    fog.filters = [ this.fogFilter ];
  }

  update(){
    this.fogFilter.update();
    this.map.update();
  }

  collectBanana(man, banana) {
    switch (banana.key) {
      case 'banana1':
        this.incFood(10);
        break;
      case 'banana2':
        this.incFood(25);
        break;
      case 'banana3':
        this.incFood(60);
        break;
    }
    banana.kill();
  }

  attacked(man, leopard){
    man.kill();
    // GAME OVER!
  }

  incFood(amount){
    this.foodCollected += amount;
    this.foodScore.text = 'Food: ' + this.foodCollected;
  }

}
