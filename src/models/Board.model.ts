import { Cell } from './Cell.model';
import { Tile } from './Tile.model';

export class Board {
  private firstStep: boolean;

  constructor(public cells: Cell[][] = [], public count: number = 16) {
    this.firstStep = true;
  }

  public initCells() {
    for (let i = 0; i < this.count / 4; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < this.count / 4; j++) {
        row.push(new Cell(i, j, this));
      }
      this.cells.push(row);
    }

    if (this.firstStep) {
      this.addTile();
      this.firstStep = false;
    }
  }

  public getCopyBoard(): Board {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    return newBoard;
  }

  public addTile(): void {
    const randomX = this.getRandomCoord();
    const randomY = this.getRandomCoord();
    const cell = this.getCell(randomX, randomY);

    if (!cell.tile) {
      new Tile(cell);
    } else {
      this.addTile();
    }
  }

  public moveTile(tile: Tile): void {
    const x = tile.x
  }

  private getRandomCoord(): number {
    return Math.floor(Math.random() * (this.count / 4));
  }

  private getCell(x: number, y: number) {
    return this.cells[y][x];
  }
}
