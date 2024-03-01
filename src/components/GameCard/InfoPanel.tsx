import React, { CSSProperties, ReactNode } from "react";
import { gameCardShadow } from "./GameCardSx";

export type Props = { children: ReactNode; sx: CSSProperties };

export const InfoPanel: React.FC<Props> = ({ children, sx }) => {
  return (
    <div
      style={{
        ...sx,
        ...gameCardShadow,
      }}
    >
      {children}
    </div>
  );
};
