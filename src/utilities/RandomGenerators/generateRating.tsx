import React from "react";
import { BiSolidStarHalf } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const generateRating = () => {
  const randomRating = Number((Math.random() * 5.00001).toFixed(2));
  const roundedRating = Math.floor(randomRating);

  const getStar = (n: number) => {
    // n is less than the roundedRating, so fill the star
    if (n < roundedRating) {
      return <AiFillStar key={n} />;
    }
    // n is equal to the roundedRating
    else if (n === roundedRating) {
      // Check if randomRating is greater than or equal to the next half value (roundedRating + 0.5)
      if (randomRating >= roundedRating + 0.5) {
        return <BiSolidStarHalf key={n} />;
      } else {
        // If not, just fill the star
        return <AiFillStar key={n} />;
      }
    }
    // n is greater than roundedRating, so outline the star
    else {
      return <AiOutlineStar key={n} />;
    }
  };

  const stars = Array.from({ length: 5 }, (_, index) => getStar(index));

  const randomReviews = Math.floor(Math.random() * 10000 + 100);

  return (
    <>
      <div className="flex items-center gap-2">
        <span className="flex gap-1 text-base">
          {stars.map((star, index) => (
            <React.Fragment key={index}>{star}</React.Fragment>
          ))}
        </span>
        <span className="text-sm underline">{`(${randomReviews})`}</span>
      </div>
    </>
  );
};

export default generateRating;
