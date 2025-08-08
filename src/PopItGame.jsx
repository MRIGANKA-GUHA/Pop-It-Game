import React, { useState } from "react";
import "./PopItGame.css";

const ROWS = [
  { className: "first" },
  { className: "second" },
  { className: "third" },
  { className: "fourth" },
  { className: "fifth" },
];

function PopItGame() {
  // 5x5 grid state: false = not pressed, true = pressed
  const [pressed, setPressed] = useState(
    Array(5)
      .fill(null)
      .map(() => Array(5).fill(false))
  );

  const handleButtonClick = (rowIdx, colIdx) => {
    setPressed((prev) => {
      const next = prev.map((row) => [...row]);
      next[rowIdx][colIdx] = !next[rowIdx][colIdx];
      return next;
    });
  };

  const handleReset = () => {
    setPressed(Array(5).fill(null).map(() => Array(5).fill(false)));
  };

  return (
    <div className="container">
      <div className="header">
        <span className="name">POP-IT GAME</span>
      </div>
      <div className="game">
        {ROWS.map((row, rowIdx) => (
          <div className={row.className} key={row.className}>
            {pressed[rowIdx].map((isPressed, colIdx) => (
              <button
                key={colIdx}
                className={isPressed ? "pressed" : "not-pressed"}
                onClick={() => handleButtonClick(rowIdx, colIdx)}
              ></button>
            ))}
          </div>
        ))}
      </div>
      <div className="footer">
        <button id="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default PopItGame;
