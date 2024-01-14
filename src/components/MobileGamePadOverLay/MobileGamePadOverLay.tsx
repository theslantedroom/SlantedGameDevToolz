/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-empty-pattern */
import React, { CSSProperties } from "react";
import { Dpad } from "./Dpad";
import { BtnPad } from "./BtnPad";

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
  return (
    <div style={style}>
      <Dpad />
      <BtnPad />
    </div>
  );
};
