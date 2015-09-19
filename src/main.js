import { DawningMap } from 'map.es6.js';
import { Dawning.Game } from 'game.es6.js';

var Dawning = {};

var game = new Dawning.Game(
  {
    width: 800,
    heidht: 600,
    element: '#game',
    size: 25,
    fieldSize: 55
  }
);
