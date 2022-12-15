import { RatingProps } from "./Rating";

export const rating = {
  primary: true,
  active: false,
  rating: 4,
  ratings: 0,
  iconWidth: 20,
  iconHeight: 20,
  onClick: () => {
    console.log("Create rating");
  },
} as RatingProps;
