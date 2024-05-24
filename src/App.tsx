import { useState } from "react";
import Player from "./Components/Player";
import Button from "./Components/Button";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import "./app.css";

function App() {
  const [playSelect, setPlaySelect] = useState(0);
  const [compSelect, setCompSelect] = useState(0);

  const [playerScore, setPlayerScore] = useState(0);
  const [compScore, setCompScore] = useState(0);

  const icons = [<FaHandRock className="resIcon"/>, <FaHandPaper className="resIcon"/>, <FaHandScissors className="resIcon"/>];

  const randNumber = () => {
    return Math.floor(Math.random() * 3);
  };

  const compareChoice = (player: number, computer: number) => {
    if (player === computer) {
      // Draw, no score change
    } else if (
      (player === 0 && computer === 2) ||
      (player === 1 && computer === 0) ||
      (player === 2 && computer === 1)
    ) {
      setPlayerScore(playerScore + 1);
    } else {
      setCompScore(compScore + 1);
    }
  };

  const handleClick = (playerCh: number) => {
    const computerCh = randNumber();
    setPlaySelect(playerCh);
    setCompSelect(computerCh);
    compareChoice(playerCh, computerCh);
  };

  return (
    <>
      <h1 className="header">Rock Paper Scissors</h1>
      <div className="playerBox">
        <Player player="Player: " score={playerScore} icon={icons[playSelect]} />
        <Player player="Computer: " score={compScore} icon={icons[compSelect]} />
      </div>

      <div className="Buttons">
        <Button
          icon={<FaHandRock className="btnIcon" />}
          onClick={() => handleClick(0)}
        />
        <Button
          icon={<FaHandPaper className="btnIcon" />}
          onClick={() => handleClick(1)}
        />
        <Button
          icon={<FaHandScissors className="btnIcon" />}
          onClick={() => handleClick(2)}
        />
      </div>
    </>
  );
}

export default App;
