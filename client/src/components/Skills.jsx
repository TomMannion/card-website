import { useState } from "react";
import "./Card.scss";
import reactsvg from "../assets/react.svg";
import javascript from "../assets/javascript.svg";
import python from "../assets/python.svg";
import ruby from "../assets/ruby.svg";
import typescript from "../assets/typescript.svg";

function Card() {
  return (
    <>
      <div className="skills front"></div>
      <div className="back">
        <div className="back-content">
          <img
            className="img-size trans-back javascript"
            src={javascript}
            alt="javascript"
          />
          <img
            className="img-size trans-back react"
            src={reactsvg}
            alt="react"
          />
          <img
            className="img-size trans-back python"
            src={python}
            alt="python"
          />
          <img className="img-size trans-back ruby" src={ruby} alt="ruby" />
          <img
            className="img-size trans-back typescript"
            src={typescript}
            alt="typescript"
          />
        </div>
      </div>
    </>
  );
}

export default Card;
