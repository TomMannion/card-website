import "./About.scss";
import Typewriter from "typewriter-effect";
import learning from "../assets/lightbulb.gif";

function About() {
  return (
    <>
      <div className="about front"></div>
      <div className="back">
        <div className="type-content">
          <Typewriter
            className="typewriter"
            options={{
              strings: ["Hi, I'm Tom.", "I am a full-stack developer."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="block-1 trans-back">
          A full-stack developer passionate about user experience and keeping
          the web exciting.
        </div>
        <div className="block-2 trans-back">
          <img className="learning" src={learning} alt="learning" />I am a
          recent graduate of the Makers Academy coding bootcamp, now looking for
          a job where i can continue to learn and grow.
        </div>
        <div className="back-content"></div>
      </div>
    </>
  );
}

export default About;
