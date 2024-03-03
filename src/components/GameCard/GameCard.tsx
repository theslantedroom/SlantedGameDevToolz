import React from "react";
import { InfoPanel } from "./InfoPanel";
import { cardPaper, sxInfo, textOutline } from "./GameCardSx";
import { ImgEmoji } from "./ImgEmoji";
import {
  BalanceSlider,
  CardTarget,
  MassAppealCard,
} from "../../cardDecks/massAppealDeck";
import { useSpeech } from "../../cardDecks/hooks/useSpeech";
import "./gameCard.css";

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
  const { speak } = useSpeech();

  return (
    <div
      id="card"
      onClick={() => {
        speak(card.headName);

        if (card.infoSection) {
          speak(card.infoSection);
        }
      }}
      style={{
        ...cardPaper,
        backgroundColor: card.color ? card.color : cardColor,
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
      <ImgEmoji emoji={card.emoji} infoLength={card.infoSection?.length || 0} />
      <TypeRow target={card.target}>{card.type}</TypeRow>
      <InfoPanel
        sx={{
          ...sxInfo,
          backgroundColor: headColor,
          borderRadius: "2px 2px 9px 9px",
          minHeight: 80,
        }}
      >
        {card.multiplier ? (
          <div style={{ fontSize: "2em" }}>{`${card.multiplier}x`}</div>
        ) : undefined}
        {card.infoSection}
        {card.slider ? <Slider slider={card.slider} /> : null}
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
        ...textOutline.black,
      }}
    >
      <span>{children}</span>
      {target ? (
        <span style={{ color: "#7B1D1D", ...textOutline.white }}>{target}</span>
      ) : null}
    </div>
  );
};

type SliderProps = { slider: BalanceSlider };
export const Slider: React.FC<SliderProps> = ({ slider }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2px",
        ...textOutline.blackHalf,
      }}
    >
      <span> {slider.leftStat}</span>
      <input
        type="range"
        className="balanceSlider"
        min="1"
        max="100"
        value={slider.value}
      />
      <span> {slider.rightStat}</span>
    </div>
  );
};
