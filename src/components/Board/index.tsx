import React from 'react';
import { Board as BoardModel } from '../../models/Board.model';
import { Cell } from '../Cell';
import * as S from './styled';

export type BoardProps = {
  board: BoardModel;
  setBoard: React.Dispatch<React.SetStateAction<BoardModel>>;
};

export const Board = ({ board, setBoard }: BoardProps) => {
  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  };

  return (
    <S.Board>
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell, index) => (
            <Cell key={index} cell={cell} theme="light" />
          ))}
        </React.Fragment>
      ))}
    </S.Board>
  );
};
