import React from 'react';
import { TileProps } from './types';
import * as S from './styled';

export const Tile = ({ tile }: TileProps) => {
  return <S.Tile color={tile?.color}>{tile?.number}</S.Tile>;
};
