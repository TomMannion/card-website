import { useState } from 'react'
import './Card.scss'

function Card({ flip }) {

  return (
      <div className={flip} onClick={()=>{setFlip(!flip)}}>
        <div className="front">
          <h1>Front</h1>
        </div>
        <div className="back">
          <h1>Back</h1>
        </div>
      </div>
  )
}

export default Card