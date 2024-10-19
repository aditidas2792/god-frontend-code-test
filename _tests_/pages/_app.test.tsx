import React from "react";
import { render } from "@testing-library/react";
import HomePage from "../../pages/_app";
import Home from "../../pages/home";

// Mock the Home component
jest.mock("../../pages/home", () => jest.fn(() => <div>Mock Home Component</div>));

describe("HomePage Component", () => {
  test("renders Home component", () => {
    render(<HomePage />);
    expect(Home).toHaveBeenCalled();
  });
});