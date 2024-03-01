import React, { useMemo } from "react";
import { imgBoxShadow, textOutline } from "./GameCardSx";
export interface Props {
  emoji: string;
  infoLength: number;
}
export const ImgEmoji: React.FC<Props> = ({ emoji, infoLength }) => {
  const fontSize = useMemo(() => {
    if (infoLength < 200) return "5em";
    return "3em";
  }, [infoLength]);
  return (
    <>
      <div
        style={{
          fontSize: fontSize,
          display: "flex",
          flexWrap: "wrap",
          flexGrow: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          ...imgBoxShadow,
          ...textOutline.blackHalf,
        }}
      >
        {emoji}
      </div>
    </>
  );
};
