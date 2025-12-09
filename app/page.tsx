"use client";

import { useState } from "react";

const squares = Array.from({ length: 9 }, (_, i) => i);

export default function Home() {
  const [board, setBoard] = useState<(null | "X" | "O")[]>(Array(9).fill(null));
  const [round, setRound] = useState(1);
  const isXturn = round % 2 == 0;
  const Ans = isXturn ? "X" : "O";

  const HandleClick = (i: number) => {
    if (board[i] === null) {
      const newBoard = [...board];
      newBoard[i] = Ans;
      setBoard(newBoard);
      setRound(round + 1);
      CheckWin();
    }
  };

  const CheckWin = () => {
    for (let i = 0; i < correctAns.length; i++) {
      const [a, b, c] = correctAns[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const table = squares.map((i) => (
    <div
      onClick={() => HandleClick(i)}
      key={i}
      className="flex flex-row justify-center items-center h-50 w-50 bg-white"
    >
      <h1 className="text-black text-9xl">{board[i]}</h1>
    </div>
  ));

  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <div className="grid grid-cols-3 gap-3">{table}</div>
    </div>
  );
}

const correctAns = [
  //poziome
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  //pionowe
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  //skosy
  [0, 4, 8],
  [2, 4, 6],
];
