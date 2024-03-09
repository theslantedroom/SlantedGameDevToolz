import React, { CSSProperties, useCallback, useEffect, useState } from "react";
import { CardHand } from "../CardHand/CardHand";
import { useCatDeckHandScore } from "./hooks/useCatDeckHandScore";
import { bgGradient, dealBtnStyle } from "./style/catDeskSx";
import { useSpeech } from "./hooks/useSpeech";
import {
  CatCard,
  DeckModCard,
  OutcomesCard,
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
import "./style/CatDeck.css";
import "@fontsource/nova-cut";
import "@fontsource-variable/alegreya";
import { useCardOverlap } from "./hooks/useCardOverlap";
import { HandFooter } from "./HandFooter";
import { BtnWrapRow } from "./BtnWrapRow";
import useCatInterval from "./hooks/useCatInterval";
import { usePlayCatMusicFile } from "./hooks/usePlayCatMusicFile";
import { selectedGreenGlow, textOutline } from "../GameCard/GameCardSx";
import { IntroScreen } from "./IntroScreen";

export type DeckDealerProps = {
  deck: CatCard[];
  modCards?: DeckModCard[];
  handSize: number;
};

export const CatDeckDealer: React.FC<DeckDealerProps> = ({
  deck,
  handSize,
}) => {
  const [tick, setTick] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  useCatInterval(() => {
    setTick((t) => t + 1);
  }, 75);
  usePlayCatMusicFile({
    hasInteracted,
  });
  // const [gamepads, setGamepads] = useState({});
  // useGamepadCatDeck((gamepads) => setGamepads(gamepads));
  // const isAPressed = gamepads[0]?.buttons[0].pressed;
  // if (isAPressed) {
  //   console.log("isAPressed");
  // }
  const { speak, cancelSpeaking } = useSpeech({ isMuteSpeech: false });

  const level1Target = 100;
  // LEVEL
  const [runLevel, setRunLevel] = useState(1);
  const [levelTarget, setLevelTarget] = useState(level1Target);
  const [levelScore, setLevelScore] = useState(0);
  const [isLevelBeaten, setIsLevelBeaten] = useState(false);
  const [discardsRemainingMax, setDiscardsRemainingMax] = useState(3);
  const [discardsRemaining, setDiscardsRemaining] = useState(discardsRemainingMax); //prettier-ignore
  const [maxHands, setMaxHands] = useState(3);
  const [handsRemaining, setHandsRemaining] = useState(maxHands);

  // Deck
  const [modCards, setModCards] = useState<DeckModCard[]>([]);
  const [remainingDeck, setRemainingDeck] = useState<CatCard[]>(getModdedDeck({ deck, modCards })); //prettier-ignore

  // HAND
  const [hand, setHand] = useState<CatCard[]>([]);
  const [selectedHand, setSelectedHand] = useState<CatCard[]>([]);
  const [selectedHandIndexes, setSelectedHandIndexes] = useState<number[]>([]);
  const [lastHand, setLastHand] = useState<CatCard[]>([]);
  const [lastHandScore, setLastHandScore] = useState(0);
  const [lastOutcomes, setLastOutcomes] = useState<OutcomesCard[]>([
    levelCards[0],
  ]);

  const hasSelectedCards = selectedHandIndexes.length > 0;

  const { handScore, outcomes, multiplier, baseScore, 
    clearOutcomes } =
    useCatDeckHandScore({
      hand: selectedHand,
      modCards,
      lastHand,
      lastOutcomes,
    }); //prettier-ignore

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
    setSelectedHand([]);
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
    setLastHand(selectedHand);
    setLastHandScore(handScore);
    setLastOutcomes(outcomes);
    setHand([]);
    setSelectedHand([]);
    setSelectedHandIndexes([]);
    setLevelScore((p) => {
      const newMatchScore = p + handScore;
      if (newMatchScore >= levelTarget) {
        setIsLevelBeaten(true);
      }
      return newMatchScore;
    });
    const readTextString = outcomes.map((o) => `${o.headName}`).join(" ");
    cancelSpeaking();
    speak(readTextString);
  }, [cancelSpeaking, handScore, levelTarget, outcomes, selectedHand, speak]);

  const shuffleDeck = useCallback(() => {
    setRemainingDeck(getModdedDeck({ deck, modCards }));
  }, [deck, modCards]);

  const restartGame = useCallback(() => {
    console.log("restartGame");
    shuffleDeck();
    setIsLevelBeaten(false);
    setHandsRemaining(maxHands);
    setLevelTarget(level1Target);
    setLevelScore(0);
    setRunLevel(1);
    setLastHand([]);
    setLastOutcomes([]);
    clearOutcomes();
    setLastHandScore(0);
    setModCards([]);
    setSelectedHand([]);
    setSelectedHandIndexes([]);
    setDiscardsRemaining(discardsRemainingMax);
  }, [clearOutcomes, discardsRemainingMax, maxHands, shuffleDeck]);

  const isNeedShuffle = remainingDeck.length < handSize;
  const isAllowDealing = isNeedShuffle || hand.length === 0;
  const nextHand = useCallback(() => {
    if (!isAllowDealing) return;

    setHasInteracted(true);

    clearOutcomes();
    setLastOutcomes([]);
    setLastHand([]);
    setLastHandScore(0);
    setSelectedHand([]);
    setSelectedHandIndexes([]);
    const shuffledDeck = [...remainingDeck].sort(() => Math.random() - 0.5);
    const newHand = shuffledDeck.slice(0, handSize);
    const updatedRemainingDeck = [...shuffledDeck.slice(handSize)];
    setHand([...newHand]);
    setRemainingDeck(updatedRemainingDeck);
  }, [isAllowDealing, clearOutcomes, remainingDeck, handSize]);
  const nextLevel = useCallback(() => {
    setModCards(getRandomMods(runLevel));
    setIsLevelBeaten(false);
    setHandsRemaining(maxHands);
    setLevelTarget((p) => p * 2);
    setRunLevel((p) => p + 1);
    setLevelScore(0);
    setDiscardsRemaining(discardsRemainingMax);
    nextHand();
  }, [nextHand, discardsRemainingMax, maxHands, runLevel]);
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
  if (!hasInteracted) {
    return (
      <IntroScreen setHasInteracted={setHasInteracted} overlap={overlap} />
    );
  }
  return (
    <div style={deckStyle}>
      <GameHeader
        runLevel={runLevel}
        isLevelBeaten={isLevelBeaten}
        isGameOver={isGameOver}
      />
      <MatchScore score={levelScore} target={levelTarget} />

      <BtnWrapRow>
        <ShuffleDealBtn
          levelScore={levelScore}
          isHandDealt={isHandDealt}
          showNextLevelBtn={showNextLevelBtn}
          isGameOver={isGameOver}
          isAllowDealing={isAllowDealing}
          shuffleDeck={shuffleDeck}
          remainingDeck={remainingDeck}
          nextLevel={nextLevel}
          isLevelBeaten={isLevelBeaten}
          nextHand={nextHand}
          handsRemaining={handsRemaining}
          isOutOfHands={isOutOfHands}
          restartGame={restartGame}
        />
      </BtnWrapRow>

      <CardHand
        cards={hand}
        overlap={overlap}
        chaos={2}
        selectedLift={-20}
        isUnSelectable={false}
        selectedHandIndexes={selectedHandIndexes}
        setSelectedHandIndexes={setSelectedHandIndexes}
        setSelectedHand={setSelectedHand}
      >
        <HandFooter hand={hand} />
        <BtnWrapRow>
          <DiscardBtn
            clickDiscard={clickDiscard}
            discardsRemaining={discardsRemaining}
            hasSelectedCards={hasSelectedCards}
            showTurnBtns={showTurnBtns}
          />
          <PlayHandBtn
            clickPlayHand={clickPlayHand}
            selectedHand={selectedHand}
            handsRemaining={handsRemaining}
            showTurnBtns={showTurnBtns}
          />
        </BtnWrapRow>
        <HandScore
          score={handScore}
          baseScore={baseScore}
          multiplier={multiplier}
        />
        <OutComes
          levelTarget={levelTarget}
          isLevelBeaten={isLevelBeaten}
          outcomes={outcomes}
          levelScore={levelScore}
          overlap={overlap}
          lastHand={lastHand}
          lastOutcomes={lastOutcomes}
          isHandInPlay={isHandInPlay}
          lastHandScore={lastHandScore}
        />
      </CardHand>
      <>
        {modCards.length ? (
          <>
            <h1 style={{ textAlign: "center" }}>Mods: {modCards.length}</h1>
            <CardHand cards={modCards as CatCard[]} overlap={20} />
          </>
        ) : null}
        {/* <div>cards in deck: {remainingDeck.length}</div> */}
        {/* <CardHand cards={remainingDeck} overlap={100} /> */}
      </>
    </div>
  );
};
const deckStyle = {
  backgroundImage: bgGradient,
  paddingTop: "15px",
  borderRadius: "2px",
  minHeight: "100vh",
  body: {
    fontFamily: "'Nova Cut', system-ui",
  },
} as CSSProperties;
