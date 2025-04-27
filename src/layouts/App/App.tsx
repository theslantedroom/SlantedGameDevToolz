import { catDeck } from "../../cardDecks/catsDeck";
import { CatDeckDealer } from "../../components/CatDeckDealer/CatDeckDealer";
import { GamepadOverlay } from "../../components/GamepadOverlay/GamepadOverlay";
import { MobileGamePadOverLay } from "../../components/MobileGamePadOverLay/MobileGamePadOverLay";
// Runs on vite server, via yarn start
function App() {
	return (
		<>
			<CatDeckDealer deck={catDeck} handSize={4} />
			<MobileGamePadOverLay />
			{/* <GamepadOverlay /> */}
		</>
	);
}
export default App;
