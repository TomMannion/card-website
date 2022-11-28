import Draggable from 'react-draggable'
import { useState } from 'react'
import Card from './Card'

function DraggableCard() {
  const [flip, setFlip] = useState(false)

  const isFlipped = flip ? 'card flip' : 'card'

  return (
    <Draggable>
      <div onClick={()=>{setFlip(!flip)}}>
        <Card flip={isFlipped}/>
      </div>
    </Draggable>
  )
}

export default DraggableCard
