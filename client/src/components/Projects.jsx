import "./Projects.scss";
import { useState } from "react";

function InterestsCard() {
  //   <div className="less-waste">
  //   <h1>Less Waste More Taste</h1>
  //   <p>
  //     A full stack web application that allows users to search for
  //     cocktail recipes based on the ingredients they have.
  //   </p>
  //   <p>Built using React, Express, MongoDB, and the CocktailDB API.</p>
  // </div>
  // <div className="Acebook">
  //   <h1>Acebook</h1>
  //   <p>
  //     A full stack web application inspired by facebook that allows
  //     users to post messages and pictures.
  //   </p>
  //   <p>Built using Handlebars, JavaScript, Express, MongoDB.</p>
  // </div>

  return (
    <>
      <div className="projects front"></div>
      <div className="back">
        <div className="back-content">
          <div className="less-waste project">
            <h1>Less Waste More Taste</h1>
            <p>
              A full stack web application that allows users to search for
              cocktail recipes based on the ingredients they have.
            </p>
            <p>Built using React, Express, MongoDB, and the CocktailDB API.</p>
          </div>
          <div className="acebook project">
            <h1>Acebook</h1>
            <p>
              A full stack web application inspired by facebook that allows
              users to post messages and pictures.
            </p>
            <p>Built using Handlebars, JavaScript, Express, MongoDB.</p>
          </div>
          <div className="brewmate project">
            <h1>BrewMate</h1>
            <p>
              A full stack web application for to store coffee recipies and save
              other peoples.
            </p>
            <p>Built React, Redux for state management, MongoDB and Express</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InterestsCard;
