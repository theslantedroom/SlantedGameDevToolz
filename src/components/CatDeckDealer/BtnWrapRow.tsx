import React, { CSSProperties } from "react";
type Props = { children: React.ReactNode };
export const BtnWrapRow: React.FC<Props> = ({ children }) => {
  const style = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  } as CSSProperties;
  return (
    <div id="playBtnRow" style={style}>
      {children}
    </div>
  );
};
