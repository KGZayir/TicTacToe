import React from 'react';
import './Square.css';

const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      className={`square ${isWinningSquare ? 'winning-square' : ''} ${value ? 'filled' : ''}`}
      onClick={onClick}
    >
      <span className={`symbol ${value ? 'visible' : ''}`}>{value}</span>
    </button>
  );
};

export default Square;