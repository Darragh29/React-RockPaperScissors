import Player from "./Components/Player"
import "./app.css"

function App() {
  return(
    <>
      <h1 className="header">Rock Paper Scissors</h1>
      <div className="playerBox">
        <Player/>
        <Player/>
      </div>
      
    </>
  )
}

export default App
