import React, { useState, useRef } from "react";
import { Car } from "../src/types/car";
import carData from "../public/api/cars.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronIcon from "../src/components/chevronIcon";
import FilterBar from "../src/components/filterBar";
import CarCard from "../src/components/carCard";
import { useRouter } from 'next/router'; 

const Home: React.FC = () => {
  const customSlider = useRef<Slider>(null);
  const [selectedBodyType, setSelectedBodyType] = useState<string | null>(null);
  const router = useRouter(); 

  // Filter cars based on selected body type
  const filteredCars = selectedBodyType
    ? carData.filter((car: Car) => car.bodyType === selectedBodyType)
    : carData;

  // Slider settings for responsive design
  const settings = {
    slidesToShow: filteredCars.length < 4 ? filteredCars.length : 4,
    dots: false,
    speed: 300,
    accessibility: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: filteredCars.length < 4 ? filteredCars.length : 4,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          dots: true,
          dotsClass: `slick-dots mt-16`,
          centerMode: true,
          initialSlide: 0
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.1,
          dots: true,
          dotsClass: `slick-dots mt-16`,
          centerMode: true,
          initialSlide: 0
        },
      },
    ],
  };

  // Handle click to navigate to learn page
  const handleLearnClick = (carId: string) => {
    router.push(`/learn/${carId}`); 
  };

  // Handle click to navigate to shop page
  const handleShopClick = (carId: string) => {
    router.push(`/shop/${carId}`);
  };

  // Handle keyboard events for buttons
  const handleKeyPress = (carId: string, action: string, event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (action === 'learn') {
        handleLearnClick(carId);
      } else if (action === 'shop') {
        handleShopClick(carId);
      }
    }
  };

  return (
    <div className="m-8">
      <div className="filter-bar mb-8">
        <FilterBar
          carData={carData}
          selectedBodyType={selectedBodyType}
          setSelectedBodyType={setSelectedBodyType}
        />
      </div>
      <Slider ref={customSlider} {...settings}>
        {filteredCars.map((car: Car) => (
          <CarCard
            key={car.id}
            car={car}
            handleLearnClick={handleLearnClick}
            handleShopClick={handleShopClick}
            handleKeyPress={handleKeyPress}
          />
        ))}
      </Slider>

      <div className="button-nav">
        <ChevronIcon
          direction="left"
          onClick={() => customSlider?.current?.slickPrev()}
        />
        <ChevronIcon
          direction="right"
          onClick={() => customSlider?.current?.slickNext()}
        />
      </div>
    </div>
  );
};

export default Home;
