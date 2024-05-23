import "../app.css";

interface Props {
  player: string;
  score: number;
}

const Player = ({ player, score }: Props) => {
  return (
    <div className="player">
      <h3>
        {player} {score}
      </h3>
      <div className="image">Image Here</div>
    </div>
  );
};

export default Player;
