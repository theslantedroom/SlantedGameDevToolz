import { catDeck, catDeckMods } from "../../cardDecks/catsDeck";
import { CatDeckDealer } from "../../components/CatDeckDealer/CatDeckDealer";
import { GamepadOverlay } from "../../components/GamepadOverlay/GamepadOverlay";
import { MobileGamePadOverLay } from "../../components/MobileGamePadOverLay/MobileGamePadOverLay";

function App() {
  return (
    <>
      <CatDeckDealer
        deck={catDeck}
        handSize={3}
        modCards={randomElements(catDeckMods)}
      />
      <p className="read-the-docs">Game Screen</p>

      {/* <MobileGamePadOverLay /> */}
      {/* <GamepadOverlay /> */}
    </>
  );
}
export default App;

function randomElements(arr: any[]) {
  const numRemaining = Math.floor(Math.random() * 3); // Random number between 0 and 2
  if (numRemaining === 0) {
    return [];
  } else if (numRemaining === 1) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return [arr[randomIndex]];
  } else {
    const shuffledArray = arr.sort(() => Math.random() - 0.5); // Shuffle the array randomly
    return shuffledArray.slice(0, 2);
  }
}
