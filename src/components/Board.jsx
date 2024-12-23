import React from 'react';
import Square from './Square';
import './Board.css';

const Board = ({ squares, onSquareClick, winningLine }) => {
  const renderSquare = (i) => {
    const isWinningSquare = winningLine && winningLine.includes(i);
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => onSquareClick(i)}
        isWinningSquare={isWinningSquare}
      />
    );
  };

  const createBoard = () => {
    let board = [];
    for (let row = 0; row < 3; row++) {
      let rowSquares = [];
      for (let col = 0; col < 3; col++) {
        rowSquares.push(renderSquare(row * 3 + col));
      }
      board.push(
        <div key={row} className="board-row">
          {rowSquares}
        </div>
      );
    }
    return board;
  };

  return <div>{createBoard()}</div>;
};

export default Board;