import { THEME_LIGHT, THEME_DARK } from '../../constants';
import { Cell as CellModel } from '../../models/Cell.model';

export type ThemeVariant = THEME_LIGHT | THEME_DARK;

export type CellProps = {
  cell: CellModel;
  theme: ThemeVariant;
};

export type CellStyled = {
  variant: ThemeVariant;
};
