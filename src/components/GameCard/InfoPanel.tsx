import React, { CSSProperties, ReactNode } from "react";

export type Props = { children: ReactNode; sx: CSSProperties };

export const InfoPanel: React.FC<Props> = ({ children, sx }) => {
  return <div style={sx}>{children}</div>;
};
