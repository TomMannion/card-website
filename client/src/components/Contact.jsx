import "./Card.scss";
import "./Contact.scss";
import linkedin from "../assets/linked.png";
import github from "../assets/github.png";
import email from "../assets/email.png";

function PlaceCard() {
  //onTouchStart={handleTouchStart}
  function handleTouchStart(link) {
    //redirect to linkedin
    console.log("touch start");
    window.open(`${link}`, "_blank");
  }

  return (
    <>
      <div className="contact front"></div>
      <div className="back">
        <div
          onTouchStart={() => {
            handleTouchStart("https://www.linkedin.com/in/thomas-mannion-/");
          }}
          className="linkedin trans-back"
        >
          <img className="contact-img" src={linkedin} alt="linkedin" />
        </div>
        <div
          onTouchStart={() => {
            handleTouchStart("https://www.github.com/TomMannion");
          }}
          className="github trans-back"
        >
          <img className="contact-img" src={github} alt="github" />
        </div>
        <div
          onTouchStart={() => {
            handleTouchStart("mailto:tmannion89@gmail.com");
          }}
          className="email trans-back"
        >
          <img className="contact-img" src={email} alt="email" />
        </div>
        <div className="back-content"></div>
      </div>
    </>
  );
}

export default PlaceCard;
