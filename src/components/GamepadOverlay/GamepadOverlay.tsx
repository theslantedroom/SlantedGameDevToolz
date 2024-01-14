import React, { CSSProperties } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { GamepadController } from "../GamePad/components/GamepadController";

export const GamepadOverlay: React.FC = () => {
  const style = {} as CSSProperties;

  return (
    <div style={style}>
      <GamepadController />
    </div>
  );
};
