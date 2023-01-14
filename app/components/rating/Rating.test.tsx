import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Rating from "./Rating";

describe("RatingButton", () => {
  it("renders the correct number of filled icons", () => {
    const rating = 3;
    const { getAllByRole } = render(
      <Rating
        rating={rating}
        iconWidth={20}
        iconHeight={20}
        active={false}
        ratings={0}
        onClick={() => {}}
      />
    );
    const filledIcons = getAllByRole("img", { name: /star/i });

    expect(filledIcons.length).toBe(rating);
  });

  it("calls the onClick function when clicked", () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <Rating
        rating={3}
        iconWidth={20}
        iconHeight={20}
        active={false}
        ratings={0}
        onClick={onClick}
      />
    );
    const button = getByRole("button");

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
