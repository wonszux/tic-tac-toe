"use client";

const squares = Array.from({ length: 9 }, (_, i) => i);

const table = squares.map((i) => (
  <div
    onClick={() => console.log(i)}
    key={i}
    className="h-50 w-50 bg-white"
  ></div>
));

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <div className="grid grid-cols-3 gap-3">{table}</div>
    </div>
  );
}
