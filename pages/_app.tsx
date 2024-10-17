import React, { useEffect } from "react";
import "../public/css/styles.css";
import { links } from "@volvo-cars/css/links";
import Home from "./home";


const addNewStyles = () => {
  const fragment = document.createDocumentFragment();
  for (const link of links()) {
    const linkElement = Object.assign(document.createElement("link"), link);
    fragment.append(linkElement);
  }
  document.head.append(fragment);
};

const HomePage = () => {
  useEffect(() => {
    addNewStyles();
  }, []);

  return (
    <React.StrictMode>
        <Home />
    </React.StrictMode>
  );
};

export default HomePage;
