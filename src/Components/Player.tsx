import "../app.css";

interface Props {
  player: string;
  score: number;
  icon: JSX.Element;
}

const Player = ({ player, score,icon }: Props) => {
  return (
    <div className="player">
      <h3>
        {player} {score}
      </h3>
      <div className="image">
        {icon}
      </div>
    </div>
  );
};

export default Player;
