import {
  CELL_2_COLOR,
  CELL_4_COLOR,
  CELL_8_COLOR,
  CELL_16_COLOR,
  CELL_32_COLOR,
  CELL_64_COLOR,
  CELL_128_COLOR,
  CELL_256_COLOR,
  CELL_512_COLOR,
  CELL_1024_COLOR,
  CELL_2048_COLOR,
} from './../../constants';
import { Tile as TileModel } from '../../models/Tile.model';

export type ColorVariant =
  | CELL_2_COLOR
  | CELL_4_COLOR
  | CELL_8_COLOR
  | CELL_16_COLOR
  | CELL_32_COLOR
  | CELL_64_COLOR
  | CELL_128_COLOR
  | CELL_256_COLOR
  | CELL_512_COLOR
  | CELL_1024_COLOR
  | CELL_2048_COLOR;

export type TileProps = {
  tile: TileModel | null;
};
