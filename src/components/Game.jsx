import React, { useState } from 'react';
import Board from './Board';
import './Game.css';

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState(null);

  const handleSquareClick = (i) => {
    if (squares[i] || winner) return;

    const newSquares = squares.slice();
    newSquares[i] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);

    const { winner: gameWinner, line } = calculateWinner(newSquares);
    if (gameWinner) {
      setWinner(gameWinner);
      setWinningLine(line);
    } else if (!newSquares.includes(null)) {
      setWinner('Draw');
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setWinningLine(null);
  };

  const status = winner
    ? winner === 'Draw'
      ? "It's a draw!"
      : `Winner: ${winner}`
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <Board squares={squares} onSquareClick={handleSquareClick} winningLine={winningLine} />
      <div className="status">{status}</div>
      {winner && (
        <button className="reset-button" onClick={resetGame}>
          Restart Game
        </button>
      )}
    </div>
  );
};

// Helper function to determine the winner
const calculateWinner = (squares) => {
  const lines = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return { winner: squares[a], line };
    }
  }

  return { winner: null, line: null };
};

export default Game;