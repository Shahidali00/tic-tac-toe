"use client";
import React, {useState } from "react";

const decideWinner = (squares: any[]) => {
  const lines = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8], //row
    [0, 3, 6],[1, 4, 7],[2, 5, 8], //column
    [0, 4, 8],[2, 4, 6],           
  ];

  for (let [a, b, c] of lines) {
    if ( squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState<boolean>(true);

  const handleClicks = (index: any) => {
    if ( board[index] || decideWinner(board) ) return ;

    const newBoard = [...board];
    newBoard[index] = isXturn ? "X" : "O";
    setBoard(newBoard);
    setIsXturn(!isXturn);
  };

  const winner = decideWinner(board);
  const boardfull = board.every((all) => all !== null);
  const status = winner
    ? `Winner: ${winner}`
    : boardfull
    ? `Match is Draw`
    : `Next player: ${isXturn ? "X" : "O"}`;

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Tic-Tac-Toe</h1>
      <div className="grid grid-cols-3 gap-2">
        {board.map((item, index) => (
          <button
            key={index}
            className="w-24 h-24 bg-white border border-gray-300 flex justify-center items-center text-3xl font-semibold cursor-pointer hover:bg-blue-500 active:bg-blue-700"
            onClick={() => handleClicks(index)}
          >
            {item}
          </button>
        ))}
      </div>
      <div
        className={`mt-4 text-xl font-semibold text-white ${
          winner ? " animate-bounce text-green-500" : boardfull ? "text-red-500" :""
        }`}
      >
        {status}
      </div>
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Restart
      </button>
    </div>
  );
}
