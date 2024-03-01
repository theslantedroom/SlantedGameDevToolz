import React, { CSSProperties } from "react";
import { InfoPanel } from "./InfoPanel";

export type TestProps = {
  children?: React.ReactNode;
  infoSection: string;
  head: string;
  rotate?: number;
  overlap?: number;
};

export const GameCard: React.FC<TestProps> = ({
  children,
  infoSection = "",
  head = "",
  rotate = 0,
  overlap = 0,
}) => {
  const headColor = "#FFEFCA";
  const cardColor = "#8D987E";

  return (
    <div
      id="card"
      style={{
        ...cardPaper,
        backgroundColor: cardColor,
        marginLeft: overlap * -1,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <InfoPanel
        sx={{
          ...sxInfo,
          backgroundColor: "#FFEFCA",
          borderRadius: "9px 9px 2px 2px",
        }}
      >
        {head}
      </InfoPanel>
      <InfoPanel
        sx={{
          ...sxInfo,
          backgroundColor: headColor,
          borderRadius: "2px 2px 9px 9px",
          minHeight: 80,
        }}
      >
        {infoSection}
      </InfoPanel>
      {children}
    </div>
  );
};

const cardPaper = {
  border: "1px solid rgba(0,0,0,0.2)",
  borderRadius: "9px",
  padding: 9,
  minHeight: 300,
  minWidth: 200,
  backgroundColor: "#D5CABD",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  color: "#4B4453",
  fontSize: 18,
} as CSSProperties;

const sxInfo = {
  border: "1px solid rgba(0,0,0,0.4)",
  padding: 9,
  minWidth: 200,
  backgroundColor: "#FEFEDF",
} as CSSProperties;
