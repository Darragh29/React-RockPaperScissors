import { useState } from "react";

interface Props {
  image: string;
  onClick: (selection:number) => void;
}

const Button = ({ image, onClick }: Props) => {
  const [selection, setSelection] = useState(0);

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random()*3);
    setSelection(randomNumber);
    onClick(selection);
    }

//   const getImage = (selection: number):string => {
//     const imageMapping: Record<number, string> = {
//         0:"img1.jpg",
//         1:"img2.jpg",
//         2:"img3.jpg",
//     }
//     return imageMapping[selection];
//   }


  return (
    <div>
      <button onClick={handleClick}>{image}</button>
    </div>
  );
};

export default Button;
