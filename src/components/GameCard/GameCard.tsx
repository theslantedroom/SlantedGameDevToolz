import React, { useCallback, useMemo, useState } from "react";
import { InfoPanel } from "./InfoPanel";
import { cardPaper, selectedGlow, sxInfo, textOutline } from "./GameCardSx";
import { ImgEmoji } from "./ImgEmoji";
import { BalanceSlider, MassAppealCard } from "../../cardDecks/massAppealDeck";
import { useSpeech } from "../CatDeckDealer/hooks/useSpeech";
import "./gameCard.css";
import { catMultiColor } from "../CatDeckDealer/catDeskSx";

export type TestProps = {
  card?: MassAppealCard;
  rotate?: number;
  overlap?: number;
  scale?: number;
  selectedLift?: number;
  isSelected?: boolean;
  onClick?: () => void;
};
export const GameCard: React.FC<TestProps> = ({
  rotate = 0,
  overlap = 0,
  scale = 0.75,
  selectedLift = 20,
  isSelected = false,
  card,
  onClick = () => null,
}) => {
  const headColor = "#FFEFCA";
  const cardColor = "#8D987E";
  const { speak, cancelSpeaking } = useSpeech({ isMuteSpeech: false });
  const marginLeft = useMemo(() => {
    return overlap * -1;
  }, [overlap]);
  const transform = useMemo(() => {
    return `rotate(${rotate}deg) translateX(${overlap / 2}px)${
      isSelected ? `translateY(${-selectedLift}px)` : ""
    }`;
  }, [overlap, rotate, isSelected, selectedLift]);

  const [hovered, setHovered] = useState(false);

  const handleClickCard = useCallback(() => {
    if (!card) return;
    onClick();

    if (isSelected) return;
    cancelSpeaking();
    speak(card.headName);
    if (card.infoSection) {
      speak(card.infoSection);
    }
  }, [card, onClick, isSelected, cancelSpeaking, speak]);
  const hoveredScale = isSelected ? `90%` : `110%`;
  if (!card) return <div>No card</div>;
  return (
    <div
      id="card"
      onClick={handleClickCard}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...cardPaper,
        width: 180 * scale,
        backgroundColor: card.color ? card.color : cardColor,
        marginLeft: marginLeft,
        transform: transform,
        cursor: "pointer",
        transition: "scale 0.5s ease",
        boxShadow: isSelected ? selectedGlow : "initial",
        zIndex: isSelected ? 2 : "initial",
        scale: hovered ? hoveredScale : "100%",
      }}
    >
      <InfoPanel
        sx={{
          ...sxInfo,
          backgroundColor: "#FFEFCA",
          borderRadius: "9px 9px 2px 2px",
          fontWeight: "bold",
          fontSize: "1.2em",
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
          minHeight: 50,
        }}
      >
        {card.multiplier ? (
          <div
            style={{
              fontSize: "2em",
              color: card.target ? catMultiColor : "lime",
              ...textOutline.black,
            }}
          >{`${card.multiplier}x`}</div>
        ) : undefined}
        {card.infoSection}
        {card.slider ? <Slider slider={card.slider} /> : null}
      </InfoPanel>
    </div>
  );
};

type TypeProps = { children: React.ReactNode; target?: string };
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
  const statSx = {
    backgroundColor: "rgb(255,255,255,0.2)",
    borderRadius: "4px",
    padding: "0px 2px",
  };
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
      <span style={statSx}>{slider.leftStat}</span>
      <input
        style={{ width: "50px" }}
        type="range"
        min="1"
        max="100"
        value={slider.value}
      />
      <span style={statSx}>{slider.rightStat}</span>
    </div>
  );
};
