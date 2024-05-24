import Player from "./Components/Player";
import Button from "./Components/Button";
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';
import "./app.css";

function App() {
  return (
    <>
      <h1 className="header">Rock Paper Scissors</h1>
      <div className="playerBox">
        <Player player="Player: " score={0} />
        <Player player="Computer: " score={0} />
      </div>

      <div className="Buttons">
        <Button icon=<FaHandRock className="btnIcon"/> key={0} onClick={App}></Button>
        <Button icon=<FaHandPaper className="btnIcon"/> key={1} onClick={App}></Button>
        <Button icon=<FaHandScissors className="btnIcon"/> key={2} onClick={App}></Button>
      </div>

    </>
  );
}

export default App;
