import React, { useState } from 'react';

<RatingsList />

type rating = {
  id: number,
  numberOfStars: number,
}

function RatingsList() {
  const [ratings, setRatings] = useState<rating[]>([
    {
      id: 1,
      numberOfStars: 3,
    },
    {
      id: 2,
      numberOfStars: 2,
    },
    {
      id: 3,
      numberOfStars: 1,
    },
    {
      id: 4,
      numberOfStars: 5,
    }
  ]);

  function updateRatings(updatedRating: rating) {
    const newRatings = [
      ...ratings,
      updatedRating
    ];

    setRatings(newRatings);
  }

  return (
    <>
    {ratings.map(rating => 
      <StarRating key={rating.id} numberOfStars={rating.numberOfStars} />
    )}
    </>
  );
}
