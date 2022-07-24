import { Cell } from './Cell.model';
import { Colors } from './Colors.model';

export class Tile {
  readonly cell: Cell;
  readonly color: Colors;
  readonly id: string;
  readonly number: number;
  public x: number;
  public y: number;

  constructor(cell: Cell, number: number = 2) {
    this.cell = cell;
    this.cell.tile = this;
    this.color = this.setColor(number);
    this.id = Date.now().toString();
    this.number = number;
    this.x = this.cell.x;
    this.y = this.cell.y;
  }

  public canMove(target: Cell): boolean {
    const hasTile = !!target.tile;
    return (target.tile && target.tile.number === this.number) || !hasTile;
  }

  private setColor(number: number) {
    switch (number) {
      case 2:
        return Colors.COLOR_2;
      case 4:
        return Colors.COLOR_4;
      case 8:
        return Colors.COLOR_8;
      case 16:
        return Colors.COLOR_16;
      case 32:
        return Colors.COLOR_32;
      case 64:
        return Colors.COLOR_64;
      case 128:
        return Colors.COLOR_128;
      case 256:
        return Colors.COLOR_256;
      case 512:
        return Colors.COLOR_512;
      case 1024:
        return Colors.COLOR_1024;
      case 2048:
        return Colors.COLOR_2048;
      default:
        return Colors.COLOR_2;
    }
  }
}
