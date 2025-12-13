"use client";

import { useState, useEffect, use } from "react";

const squares = Array.from({ length: 9 }, (_, i) => i);

export default function Home() {
  const [board, setBoard] = useState<("X" | "O" | null)[]>(Array(9).fill(null));
  const [round, setRound] = useState(1);
  const [endgame, setEndgame] = useState(false);
  const isXturn = round % 2 == 0;
  const Ans = isXturn ? "X" : "O";

  const RestartGame = () => {
    setEndgame(false);
    setBoard(board.fill(null));
    setRound(1);
  };

  const RestartButton = () => {
    if (endgame) {
      return (
        <div>
          <button
            onClick={() => {
              RestartGame();
            }}
          >
            Restart game
          </button>
        </div>
      );
    } else return <div></div>;
  };

  const HandleClick = (i: number) => {
    if (board[i] === null) {
      const newBoard = [...board];
      newBoard[i] = Ans;
      setBoard(newBoard);
      setRound(round + 1);
    }
  };

  const CheckWin = () => {
    for (let i = 0; i < correctAns.length; i++) {
      const [a, b, c] = correctAns[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setEndgame(true);
        alert("wygrały: " + board[a]);
        return board[a];
      }
    }
    return null;
  };

  useEffect(() => {
    setTimeout(() => {
      CheckWin();
    }, 100);
  }, [board]);

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
      <div className="grid grid-cols-3 gap-3">
        {table}
        {RestartButton()}
      </div>
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
