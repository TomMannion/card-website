import "./Projects.scss";
import { useState } from "react";

function InterestsCard() {
  //   <div className="less-waste">
  //   <h2>Less Waste More Taste</h2>
  //   <p>
  //     A full stack web application that allows users to search for
  //     cocktail recipes based on the ingredients they have.
  //   </p>
  //   <p>Built using React, Express, MongoDB, and the CocktailDB API.</p>
  // </div>
  // <div className="Acebook">
  //   <h2>Acebook</h2>
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
            <h2>Less Waste More Taste</h2>
            <p>Turn left over alcohol into something fun!</p>
          </div>
          <div className="acebook project">
            <h2>Acebook</h2>
            <p>Social media platform for monsters inc fans.</p>
          </div>
          <div className="brewmate project">
            <h2>BrewMate</h2>
            <p>Record and share your coffee brew recipes.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InterestsCard;
