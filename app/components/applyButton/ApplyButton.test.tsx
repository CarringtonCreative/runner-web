import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ApplyButton from "./ApplyButton";

describe("Button", () => {
  it("renders apply buttom label", () => {
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

    expect(button.textContent).toBe(label);
    expect(icon.getAttribute("width")).toBe(String(iconWidth));
    expect(icon.getAttribute("height")).toBe(String(iconHeight));
  });

  it("calls the onClick function when apply button is clicked", () => {
    const onClick = jest.fn(() => {
      console.log("clicked");
    });
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
    button.onclick = onClick;

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
