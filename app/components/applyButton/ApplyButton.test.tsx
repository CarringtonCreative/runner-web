import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ApplyButton from "./ApplyButton";

describe("Button", () => {
  it("renders the label", () => {
    const label = "Click me";
    const iconWidth = 25;
    const iconHeight = 25;
    const { getByText, getByRole } = render(
      <ApplyButton
        alt=""
        label={label}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
      />
    );
    const button = getByRole("button");
    const icon = getByRole("img");

    expect(button).toHaveTextContent(label);
    expect(icon).toHaveAttribute("width", iconWidth);
    expect(icon).toHaveAttribute("height", iconHeight);
  });

  it("calls the onClick function", () => {
    const onClick = jest.fn();
    const label = "Click me";
    const iconWidth = 25;
    const iconHeight = 25;
    const { getByRole } = render(
      <ApplyButton
        alt=""
        label={label}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        onClick={onClick}
      />
    );
    const button = getByRole("button");

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
