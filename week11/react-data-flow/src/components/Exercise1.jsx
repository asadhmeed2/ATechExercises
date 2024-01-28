import React from "react";
import { useState } from "react";

import "../styles/Exercise1.css";

const data = {
  images: [
    "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
  ],
};

const START_IMAGE_INDEX = 0;

export const Exercise1 = () => {
  const [currentImgIdx, setCurrentImgIdx] = useState(START_IMAGE_INDEX);

  const shiftImageBack = () => {
    if (currentImgIdx > 0) {
      setCurrentImgIdx((prev) => prev - 1);
    } else {
      setCurrentImgIdx(data.images.length - 1);
    }
  };

  const shiftImageForward = () => {
    if (currentImgIdx < data.images.length - 1) {
      setCurrentImgIdx((prev) => prev + 1);
    } else {
      setCurrentImgIdx(START_IMAGE_INDEX);
    }
  };

  const currentImgUrl = data.images[currentImgIdx];

  return (
    <div>
      <img src={currentImgUrl} alt={""} />

      <div className="buttons">
        <button onClick={shiftImageBack}>back</button>
        <button onClick={shiftImageForward}>forward</button>
      </div>
    </div>
  );
};
