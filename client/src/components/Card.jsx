import { useState } from 'react'
import './Card.scss'
import reactsvg from '../assets/react.svg'
import javascript from '../assets/javascript.svg'
import python from '../assets/python.svg'
import ruby from '../assets/ruby.svg'
import typescript from '../assets/typescript.svg'

function Card({ flip, CardContent }) {

  return (
      <div className={flip} onClick={()=>{setFlip(!flip)}}>
        {CardContent}
      </div>
  )
}

export default Card