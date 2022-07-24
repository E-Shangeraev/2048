import styled from 'styled-components';
import css from '@styled-system/css';

export const TileContainer = styled('div')(
  css({
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
  }),
);
