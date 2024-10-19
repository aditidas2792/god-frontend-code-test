import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from "react";
import Home from "../../pages/home";

describe("Home Component", () => {
  test("renders FilterBar and CarCards correctly", () => {
    // Render the Home component
    render(<Home />);

    // Check if the FilterBar is rendered using its role
    const filterBar = screen.getByRole('combobox'); 
    // Combobox role for the <select> element
    expect(filterBar).toBeInTheDocument();

    // Check if the CarCards are rendered
    const links = screen.getAllByRole('link');
    const carCards = links.filter((link) => link.getAttribute('aria-labelledby'));
    expect(carCards.length).toBeGreaterThan(0); 

    // Check if the navigation buttons (Chevron icons) are rendered
    const leftChevron = screen.getByRole('button', { name: /Previous/i });
    const rightChevron = screen.getByRole('button', { name: /Next/i });
    expect(leftChevron).toBeInTheDocument();
    expect(rightChevron).toBeInTheDocument();
  });
});