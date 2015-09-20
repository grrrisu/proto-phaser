import { DawningMap } from './map';
import { DawningGame } from './game';

var Dawning = {};

var game = new DawningGame(
  {
    width: 800,
    heidht: 600,
    element: '#game',
    size: 25,
    fieldSize: 55
  }
);
