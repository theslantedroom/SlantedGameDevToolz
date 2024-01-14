/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-empty-pattern */
import React, { CSSProperties, useState } from "react";
import { useGamepads } from "react-gamepads";
import { Dpad } from "./Dpad";
import { BtnPad } from "./BtnPad";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { GamepadController } from "../GamePad/components/GamepadController";

interface GamepadRef {
  [key: number]: Gamepad;
}

type Props = {};
export const MobileGamePadOverLay: React.FC<Props> = ({}) => {
  const style = {
    border: "4px solid green",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  } as CSSProperties;
  const [gamepads, setGamepads] = useState<GamepadRef>({});
  useGamepads((gamepads) => setGamepads(gamepads));
  console.log("gamepads", gamepads);
  return (
    <div style={style}>
      <Dpad />
      <BtnPad />
      <GamepadController />
    </div>
  );
};
