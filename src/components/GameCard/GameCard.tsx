import React from "react";
import { InfoPanel } from "./InfoPanel";
import { cardPaper, sxInfo, textOutline } from "./GameCardSx";
import { ImgEmoji } from "./ImgEmoji";
import { CardTarget, MassAppealCard } from "../../cardDecks/massAppealDeck";

export type TestProps = {
  card: MassAppealCard;
  rotate?: number;
  overlap?: number;
};

export const GameCard: React.FC<TestProps> = ({
  rotate = 0,
  overlap = 0,
  card,
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
          fontWeight: "bold",
          ...textOutline.whiteHalf,
        }}
      >
        {card.headName}
      </InfoPanel>
      <ImgEmoji emoji={card.emoji} infoLength={card.infoSection.length} />
      <TypeRow target={card.target}>{card.type}</TypeRow>
      <InfoPanel
        sx={{
          ...sxInfo,
          backgroundColor: headColor,
          borderRadius: "2px 2px 9px 9px",
          minHeight: 80,
        }}
      >
        {card.infoSection}
      </InfoPanel>
    </div>
  );
};

type TypeProps = { children: React.ReactNode; target?: CardTarget };
export const TypeRow: React.FC<TypeProps> = ({ children, target }) => {
  return (
    <div
      style={{
        fontSize: ".8em",
        fontWeight: "bold",
        color: "white",
        display: "flex",
        gap: 10,
        ...textOutline.blackHalf,
      }}
    >
      <span>{children}</span>
      {target ? (
        <span style={{ color: "#7B1D1D", ...textOutline.white }}>{target}</span>
      ) : null}
    </div>
  );
};
