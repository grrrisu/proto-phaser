import { DawningMap } from './map';

class DawningGame {

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

    this.map = new DawningMap(this);
  }

  preload(){
    this.game.load.image('caveman', 'images/caveman.png');
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

    this.forest = this.game.add.group();
    this.forest.enableBody = true;

    this.ground = this.game.add.group();

    this.fruits = this.game.add.group();
    this.fruits.enableBody = true;

    this.predators = this.game.add.group();
    this.predators.enableBody = true;

    this.herbivors = this.game.add.group();
    this.herbivors.enableBody = true;

    this.map.create();

    this.createMan(12, 12);

    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.game.camera.follow(this.man);

    this.foodScore = this.game.add.text(0, 0, "Food: 0", { font: "32px Arial", fill: "#ffffff", align: "center" });
    this.foodScore.fixedToCamera = true;

    var backgroundSound = this.game.add.audio('rainforest', 0.1, true); // key, volume, loop
    var footstepsSound  = this.game.add.audio('footsteps', 1.0,  true);
    backgroundSound.play();

    this.maskGraphics = this.game.add.graphics(0, 0);
    this.rayCast();
    //this.forest.mask = this.maskGraphics;
    this.ground.mask = this.maskGraphics;
    this.fruits.mask = this.maskGraphics;
    this.predators.mask = this.maskGraphics;
    this.herbivors.mask = this.maskGraphics;
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

  createTree(x, y){
    var tree = this.forest.create(x * 55, y * 55, '13_forest');
    tree.scale.setTo(0.5);
    tree.body.immovable = true;
  }

  createGrass(x, y){
    var grass = this.ground.create(x * 55, y * 55, '3_grass');
    grass.scale.setTo(0.5);
  }

  createLeopard(x, y){
    var leopard = this.predators.create(x * 55 + 22.5, y * 55 + 22.5, 'leopard');
    leopard.anchor.set(0.5);
    leopard.scale.setTo(0.5);
  }

  createRabbit(x, y){
    var rabbit = this.herbivors.create(x * 55 + 22.5, y * 55 + 22.5, 'rabbit');
    rabbit.scale.setTo(0.5);
    rabbit.anchor.set(0.5);
    this.assignRabbitMovement(rabbit);
  }

  assignRabbitMovement(rabbit){
    var d = 2;
    var direction = this.game.rnd.integerInRange(0,1);
    var rpos = this.relativePosition(rabbit.x, rabbit.y);
    var targetX, targetY;
    if(direction == 0) {
      targetX = this.game.rnd.integerInRange(rpos.x - d, rpos.x + d) * 55 + 22.5;
      if(targetX < rabbit.x){
        rabbit.scale.x = -0.5;
      } else if (targetX > rabbit.x){
        rabbit.scale.x = 0.5;
      }
      targetY = rabbit.y;
    } else {
      targetY = this.game.rnd.integerInRange(rpos.y - d, rpos.y + d) * 55 + 22.5;
      targetX = rabbit.x;
    }

    var delay = this.game.rnd.integerInRange(2000, 6000);
    var tween = this.game.add.tween(rabbit).to({x: targetX, y: targetY}, 3500, Phaser.Easing.Quadratic.InOut, true, delay); // what, duration, easing, autostart, delay
    tween.onStart.add(this.startRabbit, this);
    tween.onComplete.add(this.stopRabbit, this);
  }

  startRabbit(rabbit){
    //rabbit.animations.stop('Play');
    //rabbit.animations.play('Walk', 24, true);
  }

  stopRabbit(rabbit) {
    this.assignRabbitMovement(rabbit);
  }

  createMan(x, y) {
    this.man = this.game.add.sprite(x * 55 + 25, y * 55 + 30, 'caveman');
    this.man.anchor.setTo(0.5);
    this.game.physics.arcade.enable(this.man);
  }

  createFruit(x, y, type) {
    var fruit = this.fruits.create(x * 55, y * 55, 'banana'+type);
    fruit.scale.setTo(0.5);
  }

  update(){
    this.collisionDetection();

    var speed = 150
    this.man.body.velocity.x = 0;
    this.man.body.velocity.y = 0;

    if (this.cursors.left.isDown) {
        this.man.body.velocity.x = -speed;
        this.man.animations.play('left');
        this.rayCast();
    } else if (this.cursors.right.isDown) {
        this.man.body.velocity.x = speed;
        this.man.animations.play('right');
        this.rayCast();
    } else if (this.cursors.down.isDown) {
        this.man.body.velocity.y = speed;
        this.man.animations.play('right');
        this.rayCast();
    } else if (this.cursors.up.isDown) {
        this.man.body.velocity.y = -speed;
        this.man.animations.play('right');
        this.rayCast();
    }

    this.fogFilter.update();
  }

  collisionDetection(){
    this.game.physics.arcade.collide(this.man, this.forest);

    this.game.physics.arcade.overlap(this.man, this.fruits, this.collectBanana, null, this);
    this.game.physics.arcade.overlap(this.man, this.predators, this.attacked, null, this);
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

  rayCast() {
    this.maskGraphics.clear();
    //this.maskGraphics.lineStyle(2, 0xffffff, 1);
    this.maskGraphics.beginFill(0x000000);
    var numberOfRays = 96;
    var rayLength = 5;
    var rpos = this.relativePosition(this.man.x, this.man.y);

    for(var i = 0; i < numberOfRays; i++){
      //this.maskGraphics.moveTo(man.x, man.y);
      var rayAngle = (Math.PI * 2 / numberOfRays) * i
      var lastX = this.man.x;
      var lastY = this.man.y;
      for(var j= 0; j <= rayLength; j+=1){
        var landingX = Math.round(rpos.x - j * Math.cos(rayAngle));
        var landingY = Math.round(rpos.y - j * Math.sin(rayAngle));

        this.maskGraphics.drawRect(landingX * 55, landingY * 55, 55, 55);

        if(!this.map.isWall(landingX, landingY)){
          lastX = landingX * 55;
          lastY = landingY * 55;
        } else {
          break;
        }
      }
    }
  }

  relativePosition(ax, ay){
    return { x: (ax - 22.5) / 55, y: (ay - 22.5) / 55 };
  }

}

export { DawningGame };
