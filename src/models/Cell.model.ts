import { Board } from './Board.model';
import { Tile } from './Tile.model';
import { CELL_EMPTY } from '../constants';

export class Cell {
  constructor(
    public readonly x: number,
    public readonly y: number,
    public readonly board: Board,
    // public readonly color: CELL_EMPTY,
    public tile: Tile | null = null,
  ) {
    // this.color
  }
}
