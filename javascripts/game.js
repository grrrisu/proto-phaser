var dungeon = (function() {

  // legend
  // x : forest
  // . : empty (ground)
  // 1-3: fruits
  // R : rabbit
  // L : leopard
  var map1 = [
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

  var map2 = [
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

  var map = [
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

  var game;
  var man;
  var forest;
  var foodCollected = 0;

  preload = function() {
    game.load.image('1_grass', 'images/1_grass@2x.png');
    game.load.image('2_grass', 'images/2_grass@2x.png');
    game.load.image('3_grass', 'images/3_grass@2x.png');
    game.load.image('13_forest', 'images/13_forest@2x.png');
    game.load.image('banana1', 'images/banana-1@2x.png');
    game.load.image('banana2', 'images/banana-2@2x.png');
    game.load.image('banana3', 'images/banana-3@2x.png');
    game.load.image('caveman', 'images/caveman.png');
    game.load.image('leopard', 'images/leopard@2x.png');
    game.load.image('rabbit', 'images/rabbit@2x.png');

    //game.load.audio('rainforest', 'audio/Rainforest.mp3');
    //game.load.audio('birds', 'audio/Birds_In_Forest.mp3');
    //game.load.audio('jungle', 'audio/Jungle.mp3');
    game.load.audio('rainforest', 'audio/rainforest_ambience.mp3');
    game.load.audio('footsteps', 'audio/footsteps_dry_wheat.mp3');
  }

  create = function() {
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.world.setBounds(0, 0, 25 * 55, 25 * 55);

    background = game.add.tileSprite(0, 0, 25 * 55, 25 * 55, '13_forest');

    forest = game.add.group();
    forest.enableBody = true;

    ground = game.add.group();

    fruits = game.add.group();
    fruits.enableBody = true;

    predators = game.add.group();
    predators.enableBody = true;

    herbivors = game.add.group();
    herbivors.enableBody = true;

    map.forEach(function(row, y){
      row.forEach(function(field, x){
        if (field == 'x'){
          createTree(x, y);
        } else {
          createGrass(x, y);
          if (field == '1' || field == '2' || field == '3'){
            createFruit(x, y, field);
          } else if(field == 'L') {
            createLeopard(x, y);
          } else if(field == 'R') {
            createRabbit(x, y);
          }
        }
      });
    });

    createMan(12, 12);


    cursors = game.input.keyboard.createCursorKeys();
    game.camera.follow(man);

    foodScore = game.add.text(0, 0, "Food: 0", { font: "32px Arial", fill: "#ffffff", align: "center" });
    foodScore.fixedToCamera = true;

    backgroundSound = game.add.audio('rainforest', 0.1, true); // key, volume, loop
    footstepsSound  = game.add.audio('footsteps', 1.0,  true);
    backgroundSound.play();

    maskGraphics = game.add.graphics(0, 0);
    rayCast();
    forest.mask = maskGraphics;
    ground.mask = maskGraphics;
    fruits.mask = maskGraphics;
    predators.mask = maskGraphics;
    herbivors.mask = maskGraphics;
  }

  createTree = function(x, y){
    tree = forest.create(x * 55, y * 55, '13_forest');
    tree.scale.setTo(0.5);
    tree.body.immovable = true;
  }

  createGrass = function(x, y){
    grass = ground.create(x * 55, y * 55, '3_grass');
    grass.scale.setTo(0.5);
  }

  createLeopard = function(x, y){
    leopard = predators.create(x * 55 + 22.5, y * 55 + 22.5, 'leopard');
    leopard.anchor.set(0.5);
    leopard.scale.setTo(0.5);
  }

  createRabbit = function(x, y){
    rabbit = herbivors.create(x * 55 + 22.5, y * 55 + 22.5, 'rabbit');
    rabbit.scale.setTo(0.5);
    rabbit.anchor.set(0.5);
    assignRabbitMovement(rabbit);
  }

  assignRabbitMovement = function(rabbit){
    var d = 2;
    var direction = game.rnd.integerInRange(0,1);
    var rpos = relativePosition(rabbit.x, rabbit.y);
    if(direction == 0) {
      targetX = game.rnd.integerInRange(rpos.x - d, rpos.x + d) * 55 + 22.5;
      if(targetX < rabbit.x){
        rabbit.scale.x = -0.5;
      } else if (targetX > rabbit.x){
        rabbit.scale.x = 0.5;
      }
      targetY = rabbit.y;
    } else {
      targetY = game.rnd.integerInRange(rpos.y - d, rpos.y + d) * 55 + 22.5;
      targetX = rabbit.x;
    }

    delay = game.rnd.integerInRange(2000, 6000);
    tween = game.add.tween(rabbit).to({x: targetX, y: targetY}, 3500, Phaser.Easing.Quadratic.InOut, true, delay); // what, duration, easing, autostart, delay
    tween.onStart.add(this.startRabbit, this);
    tween.onComplete.add(this.stopRabbit, this);
  }

  startRabbit = function(rabbit){
    //rabbit.animations.stop('Play');
    //rabbit.animations.play('Walk', 24, true);
  }

  stopRabbit = function(rabbit) {
    assignRabbitMovement(rabbit);
  }

  createMan = function(x, y) {
    man = game.add.sprite(x * 55 + 25, y * 55 + 30, 'caveman');
    man.anchor.setTo(0.5);
    game.physics.arcade.enable(man);
  }

  createFruit = function(x, y, type) {
    fruit = fruits.create(x * 55, y * 55, 'banana'+type);
    fruit.scale.setTo(0.5);
  }

  update = function() {
    game.physics.arcade.collide(man, forest);

    game.physics.arcade.overlap(man, fruits, collectBanana, null, this);
    game.physics.arcade.overlap(man, predators, attacked, null, this);

    speed = 150
    man.body.velocity.x = 0;
    man.body.velocity.y = 0;

    if (cursors.left.isDown) {
        man.body.velocity.x = -speed;
        man.animations.play('left');
        rayCast();
    } else if (cursors.right.isDown) {
        man.body.velocity.x = speed;
        man.animations.play('right');
        rayCast();
    } else if (cursors.down.isDown) {
        man.body.velocity.y = speed;
        man.animations.play('right');
        rayCast();
    } else if (cursors.up.isDown) {
        man.body.velocity.y = -speed;
        man.animations.play('right');
        rayCast();
    }

  }

  function collectBanana(man, banana) {
    switch (banana.key) {
      case 'banana1':
        incFood(10);
        break;
      case 'banana2':
        incFood(25);
        break;
      case 'banana3':
        incFood(60);
        break;
    }
    banana.kill();
  }

  function attacked(man, leopard){
    man.kill();
    // GAME OVER!
  }

  function incFood(amount){
    foodCollected += amount;
    foodScore.text = 'Food: ' + foodCollected;
  }

  function rayCast() {
    maskGraphics.clear();
    //maskGraphics.lineStyle(2, 0xffffff, 1);
    maskGraphics.beginFill(0x000000);
    var numberOfRays = 64;
    var rayLength = 5;
    var rpos = relativePosition(man.x, man.y);

    for(var i = 0; i < numberOfRays; i++){
      //maskGraphics.moveTo(man.x, man.y);
      var rayAngle = (Math.PI * 2 / numberOfRays) * i
      var lastX = man.x;
      var lastY = man.y;
      for(var j= 0; j <= rayLength; j+=1){
        var landingX = Math.round(rpos.x - j * Math.cos(rayAngle));
        var landingY = Math.round(rpos.y - j * Math.sin(rayAngle));

        maskGraphics.drawRect(landingX * 55, landingY * 55, 55, 55);

        if(map[landingY][landingX] != 'x'){
          lastX = landingX * 55;
          lastY = landingY * 55;
        } else {
          break;
        }
      }
      //maskGraphics.lineTo(lastX, lastY);
    }
  }

  function relativePosition(ax, ay){
    return { x: (ax - 22.5) / 55, y: (ay - 22.5) / 55 };
  }

  function render() {
    game.debug.cameraInfo(game.camera, 32, 32);
    game.debug.spriteCoords(man, 32, 500);
  }

  game = new Phaser.Game(800, 600, Phaser.AUTO, '#game', { preload: this.preload, create: this.create, update: this.update, render: this.render } );
  //game.state.add('Boot', Dawning.Boot);

}());
