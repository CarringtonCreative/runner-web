import React, { SyntheticEvent, useState } from "react";
import "./Rating.css";
import Image from "next/image";
import StarIcon from "../../../public/star.png";
import StarEmptyIcon from "../../../public/star-empty.png";

export interface RatingProps {
  primary?: boolean;
  active: boolean;
  rating: number;
  ratings: number;
  iconWidth: number;
  iconHeight: number;
  onClick?: Function;
}

const Rating = (props: RatingProps) => {
  const [rating, setRating] = useState(Number(props.rating));
  const handleClick = (event: SyntheticEvent) => {
    const updatRating = Number(event.currentTarget.getAttribute("data-index"));
    const updatedRating = updatRating !== null ? updatRating + 1 : rating;
    setRating(Number(updatedRating));
  };

  const renderStar = (alt: string, width: number, height: number) => {
    return <Image src={StarIcon} alt={alt} width={width} height={height} />;
  };

  const renderEmptyStar = (alt: string, width: number, height: number) => {
    return (
      <Image src={StarEmptyIcon} alt={alt} width={width} height={height} />
    );
  };

  const renderStars = (rating: number, width: number, height: number) => {
    const stars = [0, 1, 2, 3, 4];
    return (
      <ul>
        {stars.map((star) =>
          rating - 1 < star ? (
            <li key={star} data-index={star} onClick={handleClick}>
              {renderEmptyStar("empty-star", width, height)}
            </li>
          ) : (
            <li key={star} data-index={star} onClick={handleClick}>
              {renderStar("star", width, height)}
            </li>
          )
        )}
      </ul>
    );
  };

  const { active, ratings, iconWidth, iconHeight } = props;
  return (
    <div className="rating-container">
      <div className="stars-container">
        {renderStars(rating, iconWidth, iconHeight)}
      </div>
      <div className="ratings-container">
        <p>{ratings}</p>
      </div>
    </div>
  );
};

export default Rating;
