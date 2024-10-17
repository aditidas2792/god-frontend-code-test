import React from "react";
import { Car } from "../types/car";

interface CarCardProps {
  car: Car;
  handleLearnClick: (carId: string) => void;
  handleShopClick: (carId: string) => void;
  handleKeyPress: (
    carId: string,
    action: string,
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => void;
}

const CarCard: React.FC<CarCardProps> = ({
  car,
  handleLearnClick,
  handleShopClick,
  handleKeyPress,
}) => {
  return (
    <div id={car.id} className="tap-area mx-4">
      <div className="md:flex flex-col">
        <p className="mt-24 font-medium car-text">
          {car.bodyType.toUpperCase()}
        </p>

        <div className="mb-8 flex flex-col lg:flex-row">
          <p className="mr-4 font-medium">{car.modelName}</p>
          <p className="car-text">{car.modelType}</p>
        </div>

        <a
          aria-labelledby={`card-heading-${car.id}`}
          data-tap-area-target
          href={car.imageUrl}
          target="_blank"
          rel="noopener noreferrer" // Required for security
        >
          <img src={car.imageUrl} alt={car.modelName} className="car-image" />
        </a>
        <div className="flex-row justify-evenly">
          <button
            aria-labelledby={`card-heading-${car.id} card-action-${car.id}-learn`}
            className="button-text button-with-arrow"
            onClick={() => handleLearnClick(car.id)}
            onKeyDown={(e) => handleKeyPress(car.id, "learn", e)}
            tabIndex={0}
          >
            LEARN
          </button>
          <button
            aria-labelledby={`card-heading-${car.id} card-action-${car.id}-shop`}
            className="button-text button-with-arrow"
            onClick={() => handleShopClick(car.id)}
            onKeyDown={(e) => handleKeyPress(car.id, "shop", e)}
            tabIndex={0}
          >
            SHOP
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
