import styled from 'styled-components';
import css from '@styled-system/css';

export const Board = styled('div')(
  css({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    gap: '15px',
    width: '100%',
    height: '100%',
    backgroundColor: 'light.board',
    borderRadius: '8px',
    border: '16px solid transparent',
    boxSizing: 'border-box',
    overflow: 'hidden',
  }),
);

export const Row = styled('div')(
  css({
    
  })
)