import "./Projects.scss";
import hand from "../assets/hand_pointing_edit.png";

function InterestsCard() {
  function handleTouchStart(link) {
    //redirect to linkedin
    console.log("touch start");
    window.open(`${link}`, "_blank");
  }

  return (
    <>
      <div className="projects front"></div>
      <div className="back">
        <div className="back-content">
          <div className="less-waste project">
            <a
              href="https://github.com/TomMannion/ingredient-based-recipe-app/"
              target="_blank"
            >
              <h2>Less Waste More Taste</h2>
            </a>
            <p>Turn left over alcohol into something fun!</p>
          </div>
          <img className="hand-1 hand-styles" src={hand} alt="hand" />
          <div className="acebook project">
            <a
              href="https://github.com/TomMannion/acebook-monsters-inc"
              target="_blank"
            >
              <h2>Acebook</h2>
            </a>
            <p>Social media platform for monsters inc fans.</p>
          </div>
          <img className="hand-2 hand-styles" src={hand} alt="hand" />
          <div className="brewmate project">
            <a href="https://github.com/TomMannion/Coffee_app" target="_blank">
              <h2>BrewMate</h2>
            </a>
            <p>Record and share your coffee brew recipes.</p>
          </div>
          <img className="hand-3 hand-styles" src={hand} alt="hand" />
        </div>
      </div>
    </>
  );
}

export default InterestsCard;
