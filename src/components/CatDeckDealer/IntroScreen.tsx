import React, { CSSProperties, useMemo } from "react";
import { selectedGreenGlow, textOutline } from "../GameCard/GameCardSx";
import { bgGradient, dealBtnStyle } from "./style/catDeskSx";
import { CardHand } from "../CardHand/CardHand";
import {
  CatCard,
  catDeck,
  catDeckOutcomes,
  generateCatCards,
} from "../../cardDecks/catsDeck";
export interface Props {
  setHasInteracted: React.Dispatch<React.SetStateAction<boolean>>;
  overlap: number;
}
export const IntroScreen: React.FC<Props> = ({ setHasInteracted, overlap }) => {
  const sx = {
    backgroundImage: bgGradient,
    paddingTop: "15px",
    borderRadius: "2px",
    minHeight: "100vh",
    body: {
      fontFamily: "'Nova Cut', system-ui",
    },
  } as CSSProperties;

  const groupCats = useMemo(() => {
    const comboCard1 = catDeckOutcomes.find(
      (c) => c.headName === "Group of Cats"
    );
    const card1 = generateCatCards({ color: "grey", count: 1 })[0];
    const card2 = generateCatCards({ color: "grey", count: 4 })[3];
    const card3 = generateCatCards({ color: "white", count: 1 })[0];
    const allCardsFound = card1 && card2 && card3 && comboCard1;
    const hand = [card1, card2, card3, comboCard1] as CatCard[];
    return allCardsFound ? hand : [];
  }, []);

  const matchingCats = useMemo(() => {
    const comboCard = catDeckOutcomes.find((c) => c.headName === "Matching");
    const hand = generateCatCards({ color: "black", count: 3 });
    return comboCard ? [...hand, comboCard] : hand;
  }, []);

  const mixedCats = useMemo(() => {
    const comboCard = catDeckOutcomes.find((c) => c.headName === "Mixed");
    const card1 = generateCatCards({ color: "grey", count: 1 })[0];
    const card2 = generateCatCards({ color: "orange", count: 4 })[3];
    const card3 = generateCatCards({ color: "white", count: 2 })[1];
    const allCardsFound = card1 && card2 && card3 && comboCard;
    const hand = [card1, card2, card3, comboCard] as CatCard[];
    return allCardsFound ? hand : [];
  }, []);

  const matingCats = useMemo(() => {
    const comboCard = catDeckOutcomes.find((c) => c.headName === "Kittens");
    const card1 = generateCatCards({ color: "black", count: 1 })[0];
    const card2 = generateCatCards({ color: "orange", count: 4 })[2];
    const card3 = catDeck.find((c) => c.headName === "Mating");
    const allCardsFound = card1 && card2 && card3 && comboCard;
    const hand = [card1, card2, card3, comboCard] as CatCard[];
    return allCardsFound ? hand : [];
  }, []);

  const pureMatingCats = useMemo(() => {
    const comboCard1 = catDeckOutcomes.find((c) => c.headName === "Pure Bred");
    const comboCard2 = catDeckOutcomes.find((c) => c.headName === "Kittens");
    const card1 = generateCatCards({ color: "grey", count: 1 })[0];
    const card2 = generateCatCards({ color: "grey", count: 4 })[2];
    const card3 = catDeck.find((c) => c.headName === "Mating");
    const allCardsFound = card1 && card2 && card3 && comboCard1 && comboCard2;
    const hand = [card1, card2, card3, comboCard1, comboCard2] as CatCard[];
    return allCardsFound ? hand : [];
  }, []);
  const equalTeams = useMemo(() => {
    const comboCard1 = catDeckOutcomes.find(
      (c) => c.headName === "Equal Teams"
    );
    const card1 = generateCatCards({ color: "grey", count: 1 })[0];
    const card2 = generateCatCards({ color: "black", count: 1 })[0];
    const card3 = generateCatCards({ color: "white", count: 1 })[0];
    const allCardsFound = card1 && card2 && card3 && comboCard1;
    const hand = [card1, card2, card3, comboCard1] as CatCard[];
    return allCardsFound ? hand : [];
  }, []);

  const cuddlePuddle = useMemo(() => {
    const comboCard1 = catDeckOutcomes.find(
      (c) => c.headName === "Cuddle Crazy"
    );
    const card1 = generateCatCards({ color: "black", count: 6 })[5];
    const card2 = catDeck.find((c) => c.headName === "Mating");
    const card3 = catDeck.find((c) => c.headName === "Mating");
    const allCardsFound = card1 && card2 && card3 && comboCard1;
    const hand = [card1, card2, card3, comboCard1] as CatCard[];
    return allCardsFound ? hand : [];
  }, []);

  const comboHandScale = 0.8;
  return (
    <div style={sx}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "3em",
          padding: 0,
          margin: 0,
          color: "pink",
          ...textOutline.black,
        }}
      >{`Kitty Krush`}</h1>
      <h1
        style={{
          textAlign: "center",
          fontSize: "8em",
          padding: 0,
          margin: 10,
        }}
      >{`😹`}</h1>
      <button
        style={{
          ...dealBtnStyle,
          boxShadow: selectedGreenGlow,
        }}
        onClick={() => setHasInteracted(true)}
      >
        Play
      </button>
      <h4
        style={{
          textAlign: "center",
          fontSize: "2em",
          padding: 0,
          margin: "40px 0px 0px 0px",
          color: "pink",
          ...textOutline.black,
        }}
      >{`Combos`}</h4>
      <CardHand cards={groupCats} overlap={overlap} scale={comboHandScale}>
        <HandLabel label="Just some cats" />
      </CardHand>
      <CardHand cards={mixedCats} overlap={overlap} scale={comboHandScale}>
        <HandLabel label="3 different cat colors" />
      </CardHand>
      <CardHand cards={matchingCats} overlap={overlap} scale={comboHandScale}>
        <HandLabel label="3 matching cat colors" />
      </CardHand>
      <CardHand cards={matingCats} overlap={overlap} scale={comboHandScale}>
        <HandLabel label="Mating different colors" />
      </CardHand>
      <CardHand cards={pureMatingCats} overlap={overlap} scale={comboHandScale}>
        <HandLabel label="Mating matching colors" />
      </CardHand>
      <CardHand cards={equalTeams} overlap={overlap} scale={comboHandScale}>
        <HandLabel label="Equal sized groups of cats" />
      </CardHand>
      <CardHand cards={cuddlePuddle} overlap={overlap} scale={comboHandScale}>
        <HandLabel label="Two mating cards" />
      </CardHand>
    </div>
  );
};

export const HandLabel = ({ label }: { label: string }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
      }}
    >
      <span
        style={{
          justifyContent: "center",
          background: "rgba(0,0,0,0.2)",
          padding: "0px 10px",
          borderRadius: "10px",
          color: "white",
          textAlign: "center",
          ...textOutline.black,
          margin: "auto",
          fontSize: "1.3em",
        }}
      >
        {label}
      </span>
    </div>
  );
};
