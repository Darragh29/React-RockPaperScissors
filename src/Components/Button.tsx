import "../app.css";

interface Props {
  icon: JSX.Element;
  onClick: () => void;
}

const Button = ({ icon, onClick }: Props) => {
  return (
    <div>
      <button className="choiceBtn" onClick={onClick}>
        {icon}
      </button>
    </div>
  );
};

export default Button;
