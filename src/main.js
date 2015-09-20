import { Dawning } from './namespace';
import { Map } from './map';
import { Game } from './game';

Dawning.dungeon = new Dawning.Game(
  {
    width: 800,
    heidht: 600,
    element: '#game',
    size: 25,
    fieldSize: 55
  }
);
