import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CarCard from "../../src/components/carCard";
import { Car } from "../../src/types/car";

// Mock data for the Car object
const mockCar: Car = {
  id: "xc90-recharge",
  bodyType: "suv",
  modelName: "XC90 Recharge",
  modelType: "plug-in hybrid",
  imageUrl: "public/images/xc90_recharge.jpg",
};

describe("CarCard Component", () => {
  const handleLearnClick = jest.fn();
  const handleShopClick = jest.fn();
  const handleKeyPress = jest.fn();

  beforeEach(() => {
    render(
      <CarCard
        car={mockCar}
        handleLearnClick={handleLearnClick}
        handleShopClick={handleShopClick}
        handleKeyPress={handleKeyPress}
      />
    );
  });

  test("renders car information correctly", () => {
    // Check if the car body type, model name, and model type are rendered
    expect(
      screen.getByText(mockCar.bodyType.toUpperCase())
    ).toBeInTheDocument();
    expect(screen.getByText(mockCar.modelName)).toBeInTheDocument();
    expect(screen.getByText(mockCar.modelType)).toBeInTheDocument();

    // Check if the car image is rendered
    const carImage = screen.getByAltText(mockCar.modelName);
    expect(carImage).toBeInTheDocument();
    expect(carImage).toHaveAttribute("src", mockCar.imageUrl);
  });

  test("calls handleLearnClick when LEARN button is clicked", () => {
    const learnButton = screen.getByRole("button", { name: /LEARN/i });
    fireEvent.click(learnButton);
    expect(handleLearnClick).toHaveBeenCalledWith(mockCar.id);
  });

  test("calls handleShopClick when SHOP button is clicked", () => {
    const shopButton = screen.getByRole("button", { name: /SHOP/i });
    fireEvent.click(shopButton);
    expect(handleShopClick).toHaveBeenCalledWith(mockCar.id);
  });

  test("calls handleKeyPress on key down events", () => {
    const learnButton = screen.getByRole("button", { name: /LEARN/i });
    fireEvent.keyDown(learnButton, { key: "Enter", code: "Enter" });
    expect(handleKeyPress).toHaveBeenCalledWith(
      mockCar.id,
      "learn",
      expect.any(Object)
    );

    const shopButton = screen.getByRole("button", { name: /SHOP/i });
    fireEvent.keyDown(shopButton, { key: "Enter", code: "Enter" });
    expect(handleKeyPress).toHaveBeenCalledWith(
      mockCar.id,
      "shop",
      expect.any(Object)
    );
  });
});
