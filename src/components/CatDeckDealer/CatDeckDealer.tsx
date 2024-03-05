import React, { CSSProperties, useCallback, useEffect, useState } from "react";
import { CardHand } from "../CardHand/CardHand";
import { useCatDeckHandScore } from "./hooks/useCatDeckHandScore";
import { bgGradient } from "./catDeskSx";
import { useSpeech } from "./hooks/useSpeech";
import {
  CatCard,
  DeckModCard,
  OutcomesCard,
  catDeckMods,
  getModdedDeck,
  getRandomMods,
  levelCards,
} from "../../cardDecks/catsDeck";
import { ShuffleDealBtn } from "./ShuffleDealBtn";
import { DiscardBtn } from "./DiscardBtn";
import { HandScore } from "./HandScore";
import { MatchScore } from "./MatchScore";
import { PlayHandBtn } from "./PlayHandBtn";
import { GameHeader } from "./GameHeader";
import { OutComes } from "./OutComes";
import "./CatDeck.css";
import "@fontsource/nova-cut";
import "@fontsource-variable/alegreya";
import { useCardOverlap } from "./hooks/useCardOverlap";
import { HandFooter } from "./HandFooter";

export type DeckDealerProps = {
  deck: CatCard[];
  modCards?: DeckModCard[];
  handSize: number;
};

export const CatDeckDealer: React.FC<DeckDealerProps> = ({
  deck,
  handSize,
}) => {
  const { speak, cancelSpeaking } = useSpeech({ isMuteSpeech: false });

  const level1Target = 100;
  const [runLevel, setRunLevel] = useState(1);
  const [lastHandScore, setLastHandScore] = useState(0);
  const [isLevelBeaten, setIsLevelBeaten] = useState(false);
  const [levelTarget, setLevelTarget] = useState(level1Target);
  const [discardsRemainingMax, setDiscardsRemainingMax] = useState(3);
  const [discardsRemaining, setDiscardsRemaining] = useState(discardsRemainingMax); //prettier-ignore
  const [maxHands, setMaxHands] = useState(3);
  const [handsRemaining, setHandsRemaining] = useState(maxHands);
  const [selectedHandIndexes, setSelectedHandIndexes] = useState<number[]>([]);
  const hasSelectedCards = selectedHandIndexes.length > 0;
  const [hand, setHand] = useState<CatCard[]>([]);
  const [modCards, setModCards] = useState<DeckModCard[]>([]);
  const [remainingDeck, setRemainingDeck] = useState<CatCard[]>(getModdedDeck({ deck, modCards })); //prettier-ignore
  const [runScore, setRunScore] = useState(0);
  const [lastHand, setLastHand] = useState<CatCard[]>([]);
  const [lastOutcomes, setLastOutcomes] = useState<OutcomesCard[]>([
    levelCards[0],
  ]);
  const { handScore, outcomes, multiplier, baseScore, clearOutcomes } =
    useCatDeckHandScore({ hand, modCards, lastHand, lastOutcomes }); //prettier-ignore
  const clickDiscard = useCallback(() => {
    if (!hasSelectedCards) return;
    // reduce remaining discard plays
    setDiscardsRemaining((p) => {
      const def = 3;
      if (p === 0) return def;
      return p - 1;
    });
    // discard card in hand
    setHand((prevHand) => {
      return prevHand.filter(
        (_, index) => !selectedHandIndexes.includes(index)
      );
    });
    setSelectedHandIndexes([]);
    // draw new cards
    const discardCount = selectedHandIndexes.length;
    const shuffledDeck = [...remainingDeck].sort(() => Math.random() - 0.5);
    const draw = shuffledDeck.slice(0, discardCount);
    const updatedRemainingDeck = [...shuffledDeck.slice(discardCount)];
    setRemainingDeck(updatedRemainingDeck);
    setHand((prevHand) => {
      return [...prevHand, ...draw];
    });
  }, [hasSelectedCards, remainingDeck, selectedHandIndexes]);

  const clickPlayHand = useCallback(() => {
    // reduce remaining plays
    setHandsRemaining((p) => {
      const def = 3;
      if (p === 0) return def;
      return p - 1;
    });
    setLastHand(hand);
    setLastHandScore(handScore);
    setLastOutcomes(outcomes);
    setHand([]);
    setRunScore((p) => {
      const newMatchScore = p + handScore;
      if (newMatchScore >= levelTarget) {
        setIsLevelBeaten(true);
      }

      return newMatchScore;
    });
    const readTextString = outcomes.map((o) => `${o.headName}`).join(" ");
    cancelSpeaking();
    speak(readTextString);
  }, [cancelSpeaking, hand, handScore, levelTarget, outcomes, speak]);

  const isNeedShuffle = remainingDeck.length < handSize;
  const isAllowDealing = isNeedShuffle || hand.length === 0;
  const dealCards = useCallback(() => {
    if (!isAllowDealing) return;
    setLastHandScore(0);
    clearOutcomes();
    const shuffledDeck = [...remainingDeck].sort(() => Math.random() - 0.5);
    const newHand = shuffledDeck.slice(0, handSize);
    const updatedRemainingDeck = [...shuffledDeck.slice(handSize)];
    setHand([...newHand]);
    setRemainingDeck(updatedRemainingDeck);
  }, [isAllowDealing, clearOutcomes, remainingDeck, handSize]);

  const shuffleDeck = useCallback(() => {
    setRemainingDeck(getModdedDeck({ deck, modCards }));
  }, [deck, modCards]);

  const restartGame = useCallback(() => {
    console.log("restartGame");
    shuffleDeck();
    setIsLevelBeaten(false);
    setHandsRemaining(maxHands);
    setLevelTarget(level1Target);
    setRunScore(0);
    setRunLevel(1);
    setLastHand([]);
    setLastOutcomes([]);
    clearOutcomes();
    setLastHandScore(0);
    setDiscardsRemaining(discardsRemainingMax);
  }, [clearOutcomes, discardsRemainingMax, maxHands, shuffleDeck]);

  const nextLevel = useCallback(() => {
    setModCards(getRandomMods(runLevel));
    setIsLevelBeaten(false);
    setHandsRemaining(maxHands);
    setLevelTarget((p) => p * 2);
    setRunLevel((p) => p + 1);
    setDiscardsRemaining(discardsRemainingMax);
    dealCards();
  }, [dealCards, discardsRemainingMax, maxHands, runLevel]);

  const isHandDealt = hand.length > 1;
  const showTurnBtns = isHandDealt && !isNeedShuffle;
  const isOutOfHands = handsRemaining === 0;
  const showNextLevelBtn = isOutOfHands || isLevelBeaten;
  const isGameOver = isOutOfHands && !isLevelBeaten;

  useEffect(() => {
    if (runLevel) speak(`Level ${runLevel}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runLevel]);
  useEffect(() => {
    if (levelTarget) speak(`Target: ${levelTarget} cats`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [levelTarget]);
  useEffect(() => {
    if (lastHandScore) speak(`${lastHandScore} cats join`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastHandScore]);
  useEffect(() => {
    if (isLevelBeaten) {
      speak("Level Complete!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLevelBeaten]);
  useEffect(() => {
    if (isGameOver) speak("Game Over");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGameOver]);
  const isHandInPlay = hand.length > 0;
  const { overlap } = useCardOverlap();

  return (
    <div style={deckStyle}>
      <GameHeader
        runLevel={runLevel}
        isLevelBeaten={isLevelBeaten}
        isGameOver={isGameOver}
      />

      <div
        id="playBtnRow"
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <DiscardBtn
          clickDiscard={clickDiscard}
          discardsRemaining={discardsRemaining}
          hasSelectedCards={hasSelectedCards}
          showTurnBtns={showTurnBtns}
        />
        <PlayHandBtn
          clickPlayHand={clickPlayHand}
          handsRemaining={handsRemaining}
          hasSelectedCards={hasSelectedCards}
          showTurnBtns={showTurnBtns}
        />
      </div>
      <MatchScore score={runScore} target={levelTarget} />

      <HandScore
        score={handScore}
        runScore={runScore}
        baseScore={baseScore}
        multiplier={multiplier}
      />

      <OutComes
        levelTarget={levelTarget}
        isLevelBeaten={isLevelBeaten}
        outcomes={outcomes}
        runScore={runScore}
        overlap={overlap}
        lastHand={lastHand}
        lastOutcomes={lastOutcomes}
        modCards={modCards}
        isHandInPlay={isHandInPlay}
        lastHandScore={lastHandScore}
      />
      <CardHand
        cards={hand}
        overlap={overlap}
        chaos={2}
        selectedLift={-50}
        isUnSelectable={discardsRemaining === 0}
        selectedHandIndexes={selectedHandIndexes}
        setSelectedHandIndexes={setSelectedHandIndexes}
      >
        <HandFooter hand={hand} />
        <ShuffleDealBtn
          runScore={runScore}
          isHandDealt={isHandDealt}
          showNextLevelBtn={showNextLevelBtn}
          isGameOver={isGameOver}
          isAllowDealing={isAllowDealing}
          shuffleDeck={shuffleDeck}
          remainingDeck={remainingDeck}
          nextLevel={nextLevel}
          isLevelBeaten={isLevelBeaten}
          dealCards={dealCards}
          handsRemaining={handsRemaining}
          isOutOfHands={isOutOfHands}
          restartGame={restartGame}
        />
      </CardHand>

      <>
        <div>Remaining Deck: {remainingDeck.length}</div>
        <CardHand cards={remainingDeck} overlap={100} />
        <h1 style={{ textAlign: "center" }}>Mods: {catDeckMods.length}</h1>
        <CardHand cards={catDeckMods} overlap={20} />
      </>
    </div>
  );
};
const deckStyle = {
  backgroundImage: bgGradient,
  borderRadius: "2px",
  minHeight: "100vh",
  body: {
    fontFamily: "'Nova Cut', system-ui",
  },
} as CSSProperties;
