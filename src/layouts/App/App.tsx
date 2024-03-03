import { catDeck } from "../../cardDecks/catsDeck";
import { CatDeckDealer } from "../../components/CatDeckDealer/CatDeckDealer";
import { GamepadOverlay } from "../../components/GamepadOverlay/GamepadOverlay";
import { MobileGamePadOverLay } from "../../components/MobileGamePadOverLay/MobileGamePadOverLay";

function App() {
  return (
    <>
      <CatDeckDealer deck={catDeck} handSize={3} />
      <p className="read-the-docs">Game Screen</p>

      {/* <MobileGamePadOverLay /> */}
      {/* <GamepadOverlay /> */}
    </>
  );
}
export default App;
