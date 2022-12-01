import Draggable from "react-draggable";
import { useState, useRef } from "react";
import Card from "./Card";

function DraggableCard({
  CardContent,
  cardClass,
  setZIndex,
  zindex,
  slide,
  amount,
}) {
  const [flip, setFlip] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [currentZIndex, setCurrentZIndex] = useState(0);

  const setZIndexToCard = () => {
    setZIndex(zindex + 1);
  };

  function onClick(event) {
    setFlip(!flip);
  }

  function onDrop(event) {
    // your code
  }

  function onDrag() {
    setDragging(true);
    setZIndexToCard();
    setCurrentZIndex(zindex + 10);
  }

  function onStop(...args) {
    setDragging(false);
    if (dragging) {
      onDrop(...args);
    } else {
      onClick(...args);
    }
  }

  return (
    <Draggable onDrag={onDrag} onStop={onStop} className={`${cardClass}`}>
      <div style={{ zIndex: currentZIndex, position: "relative" }}>
        <Card
          flip={flip ? "card flip" : "card"}
          CardContent={CardContent}
          slide={slide}
          amount={amount}
        />
      </div>
    </Draggable>
  );
}

export default DraggableCard;
