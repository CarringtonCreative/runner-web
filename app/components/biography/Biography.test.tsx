import React from "react";
import { render, screen } from "@testing-library/react";
import Biography from "./Biography";
import "@testing-library/jest-dom";

describe("Biography", () => {
  it("renders the title and description", () => {
    const title = "About Me";
    const description =
      "I am a software developer with 5 years of experience in the field.";
    const { getByText } = render(
      <Biography title={title} description={description} />
    );

    const titleElement = getByText(title);
    const descriptionElement = getByText(description);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
