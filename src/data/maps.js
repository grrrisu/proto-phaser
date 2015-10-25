import { Dawning } from '../namespace';

Dawning.Data = {

  // legend
  // x : forest
  // . : empty (ground)
  // 1-3: fruits
  // R : rabbit
  // L : leopard

  superMini: [
    ['.', '.', '.'],
    ['.', '.', '.']
  ],

  map1:
    [
      ['X', 'X', 'X', 'X', 'X', 'X', 'X', '.', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
      ['X', '.', '.', '.', '.', '.', '3', '.', '.', '.', '.', '.', '.', '.', 'X'],
      ['X', '.', '.', '1', '.', '.', '.', '.', 'R', '.', '.', '2', '.', '.', 'X'],
      ['X', '.', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', '.', 'X'],
      ['X', '.', '.', '.', '1', '.', '.', '.', '.', '.', '2', '.', '.', '.', 'X'],
      ['X', '3', '.', 'R', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'X'],
      ['X', '.', 'X', '.', '.', 'X', '.', '.', '.', 'X', 'X', '.', 'X', '.', 'X'],
      ['.', '.', 'X', '.', '.', 'X', '.', '.', '.', 'X', '.', '3', 'X', '.', '.'],
      ['X', '.', 'X', '.', '.', 'X', 'X', 'X', 'X', 'X', '.', 'X', 'X', '2', 'X'],
      ['X', 'L', 'X', '1', '.', '.', '.', 'X', '.', 'X', '1', '.', 'X', '.', 'X'],
      ['X', '.', '.', '.', '.', '.', '.', 'X', '.', '.', '.', '.', 'X', '.', 'X'],
      ['X', '.', '.', '.', 'X', '.', '.', 'X', '1', '.', 'X', 'X', 'X', 'X', 'X'],
      ['X', '.', '.', '.', 'X', '.', 'R', '.', '.', '.', '.', '.', '.', '.', 'X'],
      ['X', '.', '.', '2', 'X', '1', '.', '.', '2', '.', '.', '.', '.', '3', 'X'],
      ['X', 'X', 'X', 'X', 'X', 'X', 'X', '.', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
    ],

  map2:
    [
      ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', '.', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
      ['X', '.', '.', '.', '2', 'X', '.', '.', '.', '.', 'X', '.', '.', '2', '.', '.', '.', '.', '.', '.', '1', 'X', '.', '.', 'X'],
      ['X', '.', '.', '.', '.', 'X', '.', '.', '.', '.', 'X', '.', '.', 'X', 'X', 'X', 'X', '.', 'L', '.', '.', 'X', '.', 'R', 'X'],
      ['X', '.', '1', 'X', 'X', 'X', '2', 'X', '.', '.', '.', '.', '.', '.', '.', '.', 'X', '.', '.', '.', '.', 'X', '.', '.', 'X'],
      ['X', '.', '.', '.', '.', '.', '.', 'X', '.', '.', '1', '.', '.', 'X', '.', '.', 'X', '.', '.', 'X', '.', '.', '1', '.', 'X'],
      ['X', 'R', '.', '.', '.', 'X', 'X', 'X', '.', '.', '.', '.', '.', 'X', '.', '1', '.', '.', '.', 'X', '.', '.', '.', '.', 'X'],
      ['X', '.', '.', '.', '.', 'X', '.', '.', '.', '.', '.', '.', '.', 'X', 'X', 'X', 'X', '2', '.', 'X', '.', 'X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X', '.', 'X', '.', '1', '.', 'R', '.', '.', '.', 'X', '3', '.', '.', '.', '.', 'X', '.', '.', '.', '.', 'X'],
      ['X', '.', '.', '.', '.', 'X', '.', '.', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', '.', 'R', '.', 'X'],
      ['X', '.', '.', '.', '.', 'X', '.', '.', '.', '3', '.', '.', 'R', '.', '.', '.', '.', 'X', '.', '.', '.', '.', '.', '1', 'X'],
      ['X', '.', '.', '.', '3', 'X', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'X', '.', '.', '.', 'X', 'X', 'X', 'X'],
      ['X', '1', 'X', 'X', 'X', 'X', 'R', 'X', '.', '.', 'X', '.', '.', '.', 'X', '.', '.', 'X', 'X', 'X', '.', '.', '.', '.', 'X'],
      ['.', '.', '.', 'X', '.', '.', '.', 'X', '.', '.', 'X', '.', '.', '.', 'X', '.', '.', '.', '.', '.', '.', '3', '.', '2', '.'],
      ['X', '.', '.', 'X', '.', '.', '.', 'X', '.', '1', 'X', 'X', 'X', 'X', 'X', '.', '.', '1', '.', 'X', 'X', 'X', '.', '.', 'X'],
      ['X', '.', '.', 'X', '.', '1', '.', '.', '.', '.', 'X', '.', '.', '.', '1', '.', 'X', '.', '.', '.', '.', 'X', '.', '.', 'X'],
      ['X', '2', '.', '.', '.', '.', '.', '.', '.', '.', 'X', '3', '.', '.', '.', '.', 'X', '.', 'R', '.', '.', '.', '.', '.', 'X'],
      ['X', 'X', 'X', 'X', '.', 'X', 'X', 'X', '.', '.', 'X', 'X', 'X', 'X', '.', '.', 'X', 'X', 'X', 'X', '.', '.', 'X', '.', 'X'],
      ['X', '.', 'X', '.', '.', 'X', '2', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'X', '.', '.', '.', '.', 'R', 'X', '1', 'X'],
      ['X', '.', 'X', 'R', '.', 'X', '.', '.', '.', '.', 'X', '1', '.', '.', '.', '.', '.', '.', '1', '.', '.', '.', 'X', '.', 'X'],
      ['X', '.', '.', '.', '.', '.', '.', 'X', '1', '.', 'X', '.', 'X', 'X', 'X', 'X', '.', '.', '.', 'X', 'X', 'X', 'X', '.', 'X'],
      ['X', 'X', 'X', 'X', '.', '.', '.', 'X', '.', 'R', 'X', '.', '.', '.', '2', 'X', '1', '.', '.', '.', '.', '2', '.', '.', 'X'],
      ['X', '1', '.', '.', '.', 'X', 'X', 'X', '.', '.', 'X', 'X', 'X', '.', '.', '.', '.', '.', 'X', '.', '.', 'X', 'X', 'X', 'X'],
      ['X', '.', 'X', '.', '.', 'X', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'X', 'X', 'X', 'X', '.', '.', '.', '.', '.', 'X'],
      ['X', '.', 'X', '.', '1', '.', '.', 'X', '.', '.', 'X', '.', '.', '.', '.', '.', 'R', '.', 'X', '.', '.', '.', 'R', '3', 'X'],
      ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', '.', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ],

  map3:
    [
      ['X', 'X', 'X', 'X', 'X', 'X', '.', 'X', 'X', 'X', 'X', 'X', '.', 'X', 'X', 'X', 'X', 'X', '.', 'X', 'X', 'X', 'X', 'X', 'X'],
      ['X', '2', '.', 'X', '.', '.', '.', '.', 'X', '.', '.', '.', '.', '.', '.', '.', 'x', 'X', '.', '.', '.', '.', 'X', 'x', 'X'],
      ['X', '.', '.', 'X', 'X', '1', '.', 'X', 'X', 'X', '.', 'X', 'X', 'X', '.', '.', '3', 'X', 'X', 'X', '.', '.', 'X', '2', 'X'],
      ['X', '.', 'R', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'X', '.', 'X', 'X', 'x', '.', '.', '.', '.', '.', '.', 'X'],
      ['X', 'X', 'X', '.', 'X', 'X', 'X', '.', 'X', 'X', 'X', 'x', '.', 'X', 'R', '.', '.', '.', '.', '.', '.', 'X', '.', '.', 'X'],
      ['X', 'x', 'X', '.', '.', 'X', '3', '.', 'X', '.', '.', 'X', '2', '.', '.', '1', 'X', 'X', '.', '.', 'X', 'X', '.', '.', 'X'],
      ['.', '.', 'X', '.', '.', '.', '.', '.', 'X', '.', '.', 'X', '.', '.', '.', '.', '.', 'X', '.', '.', 'X', '.', '.', '.', '.'],
      ['X', '.', 'X', '.', '.', 'X', '.', '.', '.', '.', 'R', '.', '.', 'X', '.', '.', '.', 'X', '.', '1', 'X', '.', '.', '.', 'X'],
      ['X', '1', '.', '.', 'X', 'X', '.', 'X', '.', '.', 'X', 'X', 'X', 'X', 'X', 'X', '.', '.', '.', '.', '.', '.', 'L', '.', 'X'],
      ['X', '.', 'X', '.', '.', '.', '.', 'X', '1', '.', '.', 'X', '1', '.', '.', 'X', '.', '.', '.', '.', '.', '.', 'X', 'X', 'X'],
      ['X', '.', 'X', 'X', '.', '.', 'X', 'X', 'X', 'X', '.', '.', '.', '.', '.', '.', '.', 'X', 'X', 'X', '.', '.', 'X', '3', 'X'],
      ['X', '.', '.', '.', '.', '.', '.', 'X', '.', '.', 'R', '.', '.', 'X', 'X', '.', '.', '.', 'X', '.', '.', '.', 'X', '.', 'X'],
      ['.', '.', '.', 'X', 'X', '.', '.', '.', '.', 'X', 'X', '.', '.', '.', 'X', 'X', 'X', '.', 'X', '.', 'R', '.', '.', '.', '.'],
      ['X', '.', '.', '.', 'X', '.', 'x', 'X', '.', '.', 'X', '.', '.', '.', 'X', '.', '.', '.', 'X', '.', 'X', 'X', '.', '.', 'X'],
      ['X', '2', '.', '.', 'X', '.', 'X', 'X', 'X', '.', 'X', 'X', 'X', 'X', 'X', '1', '.', '.', '.', '.', '.', 'X', '.', '.', 'X'],
      ['X', '.', '.', '1', 'X', '.', '.', 'X', '.', '.', 'X', '3', '.', 'x', 'X', 'X', 'X', '.', '.', '.', '.', '.', '.', '2', 'X'],
      ['X', '.', '.', 'X', 'X', 'X', '.', '2', '.', 'X', 'X', '.', '.', '.', '.', '.', '.', '.', 'X', '1', '.', 'X', 'X', 'X', 'X'],
      ['X', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'X', '.', 'x', '.', '.', 'X', '2', '.', 'X', '.', '.', '.', '.', '.', 'X'],
      ['.', '.', 'R', '.', 'X', '.', '.', 'x', 'X', '.', '.', '.', 'X', '.', '.', 'X', 'X', 'X', 'X', 'X', 'X', '.', 'X', '.', '.'],
      ['X', 'X', 'X', '.', 'X', 'X', '.', 'X', 'X', '.', 'X', '.', 'X', '.', 'X', 'X', '.', '.', '.', '.', '.', '.', 'X', '.', 'X'],
      ['X', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'X', 'R', '.', '.', '.', '.', '.', 'X', '.', '.', '.', '1', 'x', 'x', 'X'],
      ['X', '.', 'X', 'X', '.', 'X', 'X', 'X', '.', 'x', 'X', 'X', '.', '.', '.', '.', '1', 'X', 'X', '.', '.', 'X', 'X', 'X', 'X'],
      ['X', '.', 'x', 'X', '.', '3', 'X', '.', '.', '.', '.', '.', '.', '.', 'X', '.', 'X', 'X', '.', '.', '.', '.', 'X', '.', 'X'],
      ['X', '3', '.', 'X', '.', '.', '.', '.', '1', '.', 'X', '1', '.', '.', 'X', 'R', '.', '.', '.', '.', 'X', '2', '.', '3', 'X'],
      ['X', 'X', 'X', 'X', 'X', 'X', '.', 'X', 'X', 'X', 'X', 'X', '.', 'X', 'X', 'X', 'X', 'X', '.', 'X', 'X', 'X', 'X', 'X', 'X'],
    ]

}
