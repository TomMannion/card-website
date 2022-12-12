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

  // also work for on touch
  function onTouchStart(event) {
    setFlip(!flip);
    setZIndexToCard();
    setCurrentZIndex(zindex + 10);
  }

  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
    };
  }

  function onDrop(event) {}

  function onDrag(event) {
    setDragging(true);
    // set previous location of the card
    setPrevX(getOffset(event.target).left);
    setPrevY(getOffset(event.target).top);
    setZIndexToCard();
    setCurrentZIndex(zindex + 10);
    if (reset) {
      setReset(!reset);
    }
  }

  function onStop(...args) {
    setCurrentX(getOffset(event.target).left);
    setCurrentY(getOffset(event.target).top);
    setDragging(false);
    // set current location of the card
    if (dragging) {
      onDrop(...args);
      console.log("prevX", prevX);
      console.log("currentX", currentX);
      console.log("prevY", prevY);
      console.log("currentY", currentY);
      if (Math.abs(currentX - prevX) < 20 && Math.abs(currentY - prevY) < 20) {
        onClick(...args);
      }
    } else {
      onClick(...args);
    }
  }

  return (
    //add on touch to draggable
    <Draggable onDrag={onDrag} onStop={onStop}>
      <div
        className={`drag-wrapper ${cardClass}`}
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
