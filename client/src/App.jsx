import "./App.scss";
import { useState } from "react";
import DraggableCard from "./components/DraggableCard";
import AnotherCard from "./components/CardContent";
import EducationCard from "./components/EducationContent";
import InterestsCard from "./components/InterestsContent";
import PlaceCard from "./components/PlaceContent";
import PlaceCard2 from "./components/PlaceContent2";
import SlideButton from "./components/SlideButton";
import CardGroup from "./components/CardGroup";
import React from "react";

function App() {
  // const [slide, setSlide] = useState([0, 0]);
  // const [zindex, setZIndex] = useState(0);

  // const spreadCards = () => {
  //   setSlide([slide[0] + 60, slide[1] + 60]);
  // };

  // const setZIndexToCard = () => {
  //   console.log("zindex", zindex);
  //   setZIndex(zindex + 1);
  // };

  return (
    <div className="App">
      <CardGroup />
    </div>
  );
}

export default App;
