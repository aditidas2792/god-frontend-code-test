import React from "react";
import { Car } from "../types/car";

interface FilterBarProps {
  carData: Car[];
  selectedBodyType: string | null;
  // setSelectedBodyType is a function that updates the selected body type state
  setSelectedBodyType: React.Dispatch<React.SetStateAction<string | null>>;
}

const FilterBar: React.FC<FilterBarProps> = ({
  carData,
  selectedBodyType,
  setSelectedBodyType,
}) => {
  // carTypes is an array of unique body types found in carData
  const carTypes = [...new Set(carData.map((car: Car) => car.bodyType))];

  return (
    <select
      value={selectedBodyType || ""} 
      onChange={(e) => setSelectedBodyType(e.target.value || null)} 
    >
      <option value="">All Body Types</option>
      {carTypes.map((bodyType: string, index: number) => (
        <option key={index} value={bodyType}>
          {bodyType.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default FilterBar;