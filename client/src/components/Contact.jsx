import "./Card.scss";
import "./Contact.scss";
import linkedin from "../assets/linked.png";
import github from "../assets/github.png";
import email from "../assets/email.png";

function PlaceCard() {
  return (
    <>
      <div className="contact front"></div>
      <div className="back">
        <div className="linkedin trans-back">
          <a
            href="https://www.linkedin.com/in/thomas-mannion-/"
            target="_blank"
          >
            <img className="contact-img" src={linkedin} alt="linkedin" />
          </a>
        </div>
        <div className="github trans-back">
          <a href="https://github.com/TomMannion" target="_blank">
            <img className="contact-img" src={github} alt="github" />
          </a>
        </div>
        <div className="email trans-back">
          <a href="mailto:tmannion89@gmail.com" target="_blank">
            <img className="contact-img" src={email} alt="email" />
          </a>
        </div>
        <div className="back-content"></div>
      </div>
    </>
  );
}

export default PlaceCard;
