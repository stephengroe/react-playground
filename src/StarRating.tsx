import React from "react";

interface StarRatingProps {
  numberOfStars: number;
}

const StarRating: React.FC<StarRatingProps> = ({ numberOfStars }) => {
  return (
    <div>⭐️⭐️⭐️⭐️⭐️</div>
  )
}

export default StarRating;