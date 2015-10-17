import { Dawning } from './namespace';
import { Data } from './data/maps.js';
import { InputHandler} from './inputHandler';
import { Fog } from './fog';
import { Pawn } from './pawn';
import { Rabbit } from './rabbit';
import { MapData } from './map_data';
import { Visability} from './visability';
import { Map } from './map';
import { IsoMap } from './iso_map';
import { Game } from './game';

Dawning.dungeon = new Dawning.Game(
  {
    width: 1200,
    heidht: 600,
    element: '#game',
    size: 25,
    fieldSize: 68
  }
);
