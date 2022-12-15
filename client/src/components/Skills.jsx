import { useState } from "react";
import "./Card.scss";
import "./Skills.scss";
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
        <div className="languages">
          <h5>languages</h5>
          <ul className="dropdown">
            <li className="dropdown-item">JavaScript</li>
            <li className="dropdown-item">TypeScript</li>
            <li className="dropdown-item">Java</li>
            <li className="dropdown-item">Ruby</li>
            <li className="dropdown-item">Python</li>
            <li className="dropdown-item">Haskell</li>
          </ul>
        </div>
        <div className="databases">
          <h5>Databases</h5>
          <ul className="dropdown">
            <li className="dropdown-item">SQL</li>
            <li className="dropdown-item">MongoDB</li>
            <li className="dropdown-item">Mongoose</li>
            <li className="dropdown-item">Active-record</li>
            <li className="dropdown-item">Sequelize</li>
          </ul>
        </div>
        <div className="frameworks">
          <h5>Frameworks/Tools</h5>
          <ul className="dropdown">
            <li className="dropdown-item">React</li>
            <li className="dropdown-item">Express</li>
            <li className="dropdown-item">Ruby on Rails</li>
            <li className="dropdown-item">Tailwind</li>
            <li className="dropdown-item">Material-UI</li>
            <li className="dropdown-item">Docker</li>
          </ul>
        </div>
        <div className="testing">
          <h5>Testing</h5>
          <ul className="dropdown">
            <li className="dropdown-item">Jest</li>
            <li className="dropdown-item">Cypress</li>
            <li className="dropdown-item">Capybara</li>
            <li className="dropdown-item">RSpec</li>
            <li className="dropdown-item">Jasmine</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Card;
