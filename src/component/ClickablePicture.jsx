import './clickablepicture.css';
import { useState } from 'react';

export const ClickablePicture = ({ img, imgClicked }) => {
  const [srcImg, setImg] = useState(img);

  const changePic = () => {
    setImg(srcImg === img ? imgClicked : img);
  };
  return (
    <div className="clickable-picture ">
      <img src={srcImg} alt="pictures" onClick={changePic} />
    </div>
  );
};
