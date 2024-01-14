import React, { CSSProperties, useState } from "react";
// import { useGamepads } from "react-gamepads";
export type TestProps = { children?: React.ReactNode; count: number };

export const GamepadOverlay: React.FC<TestProps> = ({
  children,
  count = 4,
}) => {
  const style = {} as CSSProperties;
  // const [gamepads, setGamepads] = useState({});
  // useGamepads((gamepads) => setGamepads(gamepads));
  return (
    <div style={style}>
      {children} GamepadOverlay count: {count}
      {/* <div>{gamepads[0].buttons[4].pressed}</div> */}
    </div>
  );
};
