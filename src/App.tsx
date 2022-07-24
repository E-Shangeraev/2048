import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { GameContainer, Container } from './components/Layout';
import { Board } from './components/Board';
import { TileContainer } from './components/TileContainer';
import { Board as BoardModel } from './models/Board.model';
import './assets/styles/index.css';

function App() {
  const [board, setBoard] = useState(new BoardModel());

  useEffect(() => {
    restart();
  }, []);

  function restart() {
    const newBoard = new BoardModel();
    newBoard.initCells();
    newBoard.addTile();
    setBoard(newBoard);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <h1>2048</h1>
        <GameContainer>
          <Board board={board} setBoard={setBoard} />
        </GameContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
