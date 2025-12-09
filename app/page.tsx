"use client";

import { useEffect, useState } from "react";

const squares = Array.from({ length: 9 }, (_, i) => i);

export default function Home() {
  const [Xguesses, setXguesses] = useState<number[]>([]);
  const [Yguesses, setYguesses] = useState<number[]>([]);
  const [round, setRound] = useState(1);
  const isXturn = round % 2 == 0;

  const Ans = isXturn ? "X" : "O";

  const HandleClick = (i: number) => {
    const Setter = isXturn ? setXguesses : setYguesses;
    Setter((prev) => [...prev, i]);
    console.log(i);
  };

  const table = squares.map((i) => (
    <div
      onClick={() => HandleClick(i)}
      key={i}
      className="flex flex-row justify-center items-center h-50 w-50 bg-white"
    >
      <h1 className="text-black text-9xl">{Ans}</h1>
    </div>
  ));

  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <div className="grid grid-cols-3 gap-3">{table}</div>
    </div>
  );
}
