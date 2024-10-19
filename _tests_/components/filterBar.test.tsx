import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import FilterBar from "../../src/components/filterBar";
import { Car } from "../../src/types/car";


// Mock data for the Car objects
const mockCarData: Car[] = [
  {
    id: "xc90-recharge",
    bodyType: "suv",
    modelName: "XC90 Recharge",
    modelType: "plug-in hybrid",
    imageUrl: "public/images/xc90_recharge.jpg"
  },
  {
    id: "s90-recharge",
    modelName: "S90 Recharge", 
    bodyType: "sedan",
    modelType: "plug-in hybrid",
    imageUrl: "public/images/s90_recharge.jpg"
  },
  {
    id: "v90-recharge",
    modelName: "V90 Recharge", 
    bodyType: "estate",
    modelType: "plug-in hybrid",
    imageUrl: "public/images/v90_recharge.jpg"
  },
];

describe("FilterBar Component", () => {
  const setSelectedBodyType = jest.fn(); // Mock function for setting the selected body type

  beforeEach(() => {
    render(
      <FilterBar
        carData={mockCarData}
        selectedBodyType={null}
        setSelectedBodyType={setSelectedBodyType}
      />
    );
  });

  test("renders the select element with correct options", () => {
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    // Check if the default option is present
    expect(screen.getByText("All Body Types")).toBeInTheDocument();

    // Check if the unique body types are rendered as options
    const uniqueBodyTypes = [...new Set(mockCarData.map(car => car.bodyType))];
    uniqueBodyTypes.forEach(bodyType => {
      expect(screen.getByText(bodyType.toUpperCase())).toBeInTheDocument();
    });
  });

  test("calls setSelectedBodyType when an option is selected", () => {
    const selectElement = screen.getByRole('combobox');
    
    // Simulate selecting an option
    fireEvent.change(selectElement, { target: { value: "suv" } });
    
    // Check if setSelectedBodyType was called with the correct value
    expect(setSelectedBodyType).toHaveBeenCalledWith("suv");
  });

  test("calls setSelectedBodyType with null when 'All Body Types' is selected", () => {
    const selectElement = screen.getByRole('combobox');
    
    // Simulate selecting 'All Body Types'
    fireEvent.change(selectElement, { target: { value: "" } });
    
    // Check if setSelectedBodyType was called with null
    expect(setSelectedBodyType).toHaveBeenCalledWith(null);
  });
});