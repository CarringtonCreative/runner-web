import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Rating from "./Rating";

describe("RatingButton", () => {
  it("renders rating stars", () => {
    const rating = 3;
    const { getAllByAltText } = render(
      <Rating
        rating={rating}
        iconWidth={20}
        iconHeight={20}
        active={false}
        ratings={0}
        onClick={() => {}}
      />
    );
    const emptyIcons = getAllByAltText(/empty-star/i);
    expect(emptyIcons.length).toBe(5 - rating);
  });

  it("calls the onClick function when a star is clicked", () => {
    const onClick = jest.fn(() => {
      console.log("clicked");
    });
    const { getAllByRole } = render(
      <Rating
        rating={3}
        iconWidth={20}
        iconHeight={20}
        active={false}
        ratings={0}
        onClick={onClick}
      />
    );
    const items = getAllByRole("listitem");
    const item = items[0];

    item.onclick = onClick;
    fireEvent.click(item);

    expect(onClick).toHaveBeenCalled();
  });
});
