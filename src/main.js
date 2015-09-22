import { Dawning } from './namespace';
import { Fog } from './fog';
import { Pawn } from './pawn';
import { Rabbit } from './rabbit';
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
