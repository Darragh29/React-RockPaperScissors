import Player from "./Components/Player";
import "./app.css";

function App() {
  return (
    <>
      <h1 className="header">Rock Paper Scissors</h1>
      <div className="playerBox">
        <Player player="Player: " score={0} />
        <Player player="Computer: " score={0} />
      </div>
    </>
  );
}

export default App;
