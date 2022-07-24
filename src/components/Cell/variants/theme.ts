import { CssFunctionReturnType, css } from '@styled-system/css';

export const themeVariants: Record<string, CssFunctionReturnType> = {
  light: css({
    backgroundColor: 'light.emptyCell',
  }),
  dark: css({
    backgroundColor: 'dark.emptyCell',
  }),
};
