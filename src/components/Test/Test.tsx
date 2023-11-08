import React, { CSSProperties } from "react";

export type TestProps = { children?: React.ReactNode; count: number };

export const Test: React.FC<TestProps> = ({ children, count = 4 }) => {
  const style = {} as CSSProperties;

  return (
    <div style={style}>
      {children} TEST count: {count}
    </div>
  );
};
