import styled from 'styled-components';
import css from '@styled-system/css';
import { variant } from 'styled-system';
import { CellStyled } from './types';
import { themeVariants } from './variants/theme';

export const Cell = styled('div')<CellStyled>(
  css({
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: '3px',
    overflow: 'hidden',
  }),
  variant({
    prop: 'variant',
    variants: themeVariants,
  }),
);
