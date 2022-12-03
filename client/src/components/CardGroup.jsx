import { useState } from "react";
import DraggableCard from "./DraggableCard";
import AnotherCard from "./Skills";
import EducationCard from "./Experience";
import InterestsCard from "./Projects";
import PlaceCard from "./Contact";
import PlaceCard2 from "./About";
import SlideButton from "./SlideButton";
import Grid from "@mui/material/Unstable_Grid2";

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
  const [resetAll, setResetAll] = useState(false);

  const amount = 60;

  const spreadCards = () => {
    setSlide(!slide);
  };

  const resetAllCards = () => {
    setResetAll(!resetAll);
  };

  return (
    <Grid container spacing={2} className="grid-wrap">
      <Grid item xs={12} className="button-grid">
        <SlideButton spreadCards={spreadCards} resetAllCards={resetAllCards} />
      </Grid>
      <Grid item xs={12} className="card-grid">
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
      </Grid>
    </Grid>
  );
}

export default CardGroup;
