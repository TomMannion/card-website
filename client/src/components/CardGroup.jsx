import { useState } from "react";
import DraggableCard from "./DraggableCard";
import AnotherCard from "./CardContent";
import EducationCard from "./EducationContent";
import InterestsCard from "./InterestsContent";
import PlaceCard from "./PlaceContent";
import PlaceCard2 from "./PlaceContent2";
import SlideButton from "./SlideButton";
import { set } from "mongoose";

function CardGroup() {
  const allCards = [
    <AnotherCard />,
    <EducationCard />,
    <InterestsCard />,
    <PlaceCard />,
    <PlaceCard2 />,
  ];
  const [slide, setSlide] = useState(false);
  const [zindex, setZIndex] = useState(0);

  const amount = 60;

  const spreadCards = () => {
    setSlide(!slide);
  };

  return (
    <>
      <SlideButton spreadCards={spreadCards} />
      <div className="card-group">
        {allCards.map((card, index) => {
          return (
            <DraggableCard
              key={index}
              CardContent={card}
              cardClass={`card-${index}`}
              setZIndex={setZIndex}
              zindex={zindex}
              slide={slide}
              amount={index * amount}
              style={{ zIndex: zindex }}
            />
          );
        })}
      </div>
    </>
  );
}

export default CardGroup;
