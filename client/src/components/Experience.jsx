import "./Card.scss";
import "./Experience.scss";
import makers from "../assets/makers.png";
import durham from "../assets/durham.png";
import Typewriter from "typewriter-effect";

function EducationCard() {
  return (
    <>
      <div className="experience front"></div>
      <div className="back">
        <div className="type-content">
          <Typewriter
            className="typewriter"
            options={{
              strings: [
                "Makers graduate.",
                "Durham University graduate.",
                "Life long learner.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <img className="makers-logo" src={makers} alt="makers" />
        <div className="block-1 trans-back">
          Recently graduated from Makers Academy, a 16 week intensive full-stack
          bootcamp.
        </div>
        <img className="durham-logo" src={durham} alt="durham" />
        <div className="block-2 trans-back">
          Durham University graduate in Computer Science, with a focus on
          algorithms and data structures.
        </div>
      </div>
    </>
  );
}

export default EducationCard;
