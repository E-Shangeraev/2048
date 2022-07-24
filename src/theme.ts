const theme = {
  colors: {
    light: {
      background: '#faf8ef',
      board: '#bbada0',
      fonts: '#776e65',
      emptyCell: 'rgba(238, 228, 218, 0.35)',
    },
    dark: {
      background: '#3f7f3f',
    },
    tile2: '#eee4da',
    tile4: '#eee1c9',
    tile8: '#f3b27a',
    tile16: '#f69664',
    tile32: '#f77c5f',
  },
  sizes: [0, 4, 8, 12, 16, 20, 24, 28, 32, 64],
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 64],
  fonts: {
    regular: 'clear_sansregular, sans-serif',
    thin: 'clear_sans_thinregular, sans-serif',
    medium: 'clear_sans_mediumregular, sans-serif',
    light: 'clear_sans_lightregular, sans-serif',
    italic: 'clear_sansitalic, sans-serif',
    italicBold: 'clear_sansbold_italic, sans-serif',
    bold: 'clear_sansbold, sans-serif',
  },
  fontSizes: [0, 4, 8, 12, 16, 20, 24, 28, 32, 64],
  shadows: {
    cellShadow:
      '0 0 30px 10px rgb(243 215 116 / 0%), inset 0 0 0 1px rgb(255 255 255 / 0%)',
    tileShadow:
      '0 0 30px 10px rgb(243 215 116 / 24%), inset 0 0 0 1px rgb(255 255 255 / 14%)',
  },
};

export default theme;
