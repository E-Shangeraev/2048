import styled from 'styled-components';
import css from '@styled-system/css';
import { variant } from 'styled-system';
import { colorVariants } from './variants/color';

export const Tile = styled('div')(
  css({
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    fontFamily: 'bold',
    fontSize: 52,
    fontWeight: 'bold',
    color: 'light.fonts',
  }),
  variant({
    prop: 'color',
    variants: colorVariants,
  }),
);
