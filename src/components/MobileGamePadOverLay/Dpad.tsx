/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-empty-pattern */
import React, { CSSProperties, useMemo } from "react";

export type Props = { size?: number };
export const Dpad: React.FC<Props> = ({ size = 170 }) => {
  const style = {
    border: "1px solid rgb(0,0,0,0.2)",
    borderRadius: "10px",
    height: size,
    width: size,
    position: "absolute",
    bottom: 20,
    left: 20,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
  } as CSSProperties;

  const Buttons = useMemo(() => {
    const buttonStyle: CSSProperties = {
      width: "100%",
      height: "100%",
      position: "relative",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "2em",
      border: "none",
      background: "none",
    };
    const buttons = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        buttons.push(
          <button key={`${row}-${col}`} style={buttonStyle}>
            {row === 0 && col === 1 ? "🔼" : null}
            {row === 1 && col === 0 ? "◀️" : null}
            {row === 1 && col === 2 ? "▶️" : null}
            {row === 2 && col === 1 ? "🔽" : null}
          </button>
        );
      }
    }
    return buttons;
  }, []);

  return <div style={style}>{Buttons}</div>;
};
