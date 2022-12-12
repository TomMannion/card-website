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
  reset,
  setReset,
}) {
  const [flip, setFlip] = useState(false);
  const [dragging, setDragging] = useState(false);
  //previous location of the card
  const [prevX, setPrevX] = useState(0);
  const [prevY, setPrevY] = useState(0);
  //set current location of the card
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [currentZIndex, setCurrentZIndex] = useState(0);

  const setZIndexToCard = () => {
    setZIndex(zindex + 1);
  };

  function onClick(event) {
    setFlip(!flip);
    setZIndexToCard();
    setCurrentZIndex(zindex + 10);
  }

  function onDrop(event) {
    // set current location of the card
    setCurrentX(event.clientX);
    setCurrentY(event.clientY);
  }

  function onDrag(event) {
    setDragging(true);
    // set previous location of the card
    setPrevX(event.clientX);
    setPrevY(event.clientY);
    setZIndexToCard();
    setCurrentZIndex(zindex + 10);
    if (reset) {
      setReset(!reset);
    }
  }

  //on touch devices, the click event is not fired
  function onTouch(event) {
    setFlip(!flip);
    setZIndexToCard();
    setCurrentZIndex(zindex + 10);
  }

  function onStop(...args) {
    setDragging(false);
    if (dragging) {
      onDrop(...args);
      if (
        (prevX - currentX) * (prevX - currentX) < 2000 &&
        (prevY - currentY) * (prevY - currentY) < 2000
      ) {
        onClick(...args);
        onTouch(...args);
      }
    } else {
      onClick(...args);
      onTouch(...args);
    }
  }

  return (
    <Draggable onDrag={onDrag} onStop={onStop} className={`${cardClass}`}>
      <div
        className="drag-wrapper"
        style={{ zIndex: currentZIndex, position: "relative" }}
      >
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
