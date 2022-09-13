import './likes.css';
import { useState } from 'react';
const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

export const Likes = () => {
  const [counter, setButton] = useState(0);
  const [style, setStyle] = useState({ backgroundColor: colors[counter] });
  //const style = { backgroundColor: 'purple' };
  console.log(style);
  const changeBackground = () => {
    setButton(counter + 1);
    setStyle({ backgroundColor: colors[(counter + 1) % colors.length] });
  };

  return (
    <div className="colors-button">
      <button style={style} onClick={changeBackground}>
        {counter} Likes
      </button>
    </div>
  );
};
