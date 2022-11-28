import Draggable from 'react-draggable';
import { useState } from 'react';
import Card from './Card';


function DraggableCard() {

  const [flip, setFlip] = useState(false)
  const [dragging, setDragging] = useState(false)

  function onClick(event) {
    setFlip(!flip)
  }

  function onDrop(event) {
    // your code
  }

  function onDrag() {
    setDragging(true)
  }

  function onStop(...args) {
    setDragging(false)
    if (dragging) {
      onDrop(...args)
    } else {
      onClick(...args)
    }
  }

  return (
    <Draggable
      onDrag={onDrag}
      onStop={onStop}
    >
      <div>
        <Card flip={flip ? "card flip" : "card"} />
      </div>
    </Draggable>
  )
}

export default DraggableCard