import { GamepadOverlay } from "../../components/GamepadOverlay/GamepadOverlay";
import { MobileGamePadOverLay } from "../../components/MobileGamePadOverLay/MobileGamePadOverLay";

function App() {
  return (
    <>
      <p className="read-the-docs">Game Screen</p>

      <MobileGamePadOverLay />
      <GamepadOverlay />
    </>
  );
}
export default App;
