import React from 'react';
import * as S from './styled';
import { CellProps } from './types';
import { Cell as CellModel } from '../../models/Cell.model';
import { Tile } from '../Tile';

export const Cell = ({ cell, theme }: CellProps) => {
  return (
    <S.Cell variant={theme}>
      <Tile tile={cell.tile} />
    </S.Cell>
  );
};
