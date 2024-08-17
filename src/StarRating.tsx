import React, { useState } from "react";

interface StarRatingProps {
  numberOfStars: number;
}

const StarRating: React.FC<StarRatingProps> = ({ numberOfStars }) => {
  const [stars, setStars] = useState(numberOfStars);

  function updateStars(number: number) {
    let newStars = number;
    
    if (newStars < 0) newStars = 0;
    if (newStars > 5) newStars = 5;

    setStars(newStars);
  }

  return (
    <div>
      {stars > 0 ? (
        <span onMouseOver={() => updateStars(1)}>★</span>
      ):(
        <span onMouseOver={() => updateStars(1)}>☆</span>
      )}
      {stars > 1 ? (
        <span onMouseOver={() => updateStars(2)}>★</span>
      ):(
        <span onMouseOver={() => updateStars(2)}>☆</span>
      )}
      {stars > 2 ? (
        <span onMouseOver={() => updateStars(3)}>★</span>
      ):(
        <span onMouseOver={() => updateStars(3)}>☆</span>
      )}
      {stars > 3 ? (
        <span onMouseOver={() => updateStars(4)}>★</span>
      ):(
        <span onMouseOver={() => updateStars(4)}>☆</span>
      )}
      {stars > 4 ? (
        <span onMouseOver={() => updateStars(5)}>★</span>
      ):(
        <span onMouseOver={() => updateStars(5)}>☆</span>
      )}
    </div>
  )
}

export default StarRating;