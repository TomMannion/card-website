import "./Card.scss";
import "./Contact.scss";
import t from "../assets/t.png";
import m from "../assets/m.png";

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
        <img className="t" src={t} alt="t" />
        <img className="m" src={m} alt="m" />
        <h4 className="name">THOMAS MANNION</h4>
        <div
          className="email"
          onClick={() => handleTouchStart("mailto:tmannion89@gmail.com")}
          onTouchStart={() => handleTouchStart("mailto:tmannion89@gmail.com")}
        >
          tmannion89@gmail.com
        </div>
        <div
          className="git-logo"
          alt="github"
          onClick={() => handleTouchStart("https://www.github.com/TomMannion")}
          onTouchStart={() =>
            handleTouchStart("https://www.github.com/TomMannion")
          }
        />
        <div
          className="linked-logo"
          alt="linkedin"
          onClick={() =>
            handleTouchStart("https://www.linkedin.com/in/thomas-mannion-/")
          }
          onTouchStart={() =>
            handleTouchStart("https://www.linkedin.com/in/thomas-mannion-/n")
          }
        />
      </div>
    </>
  );
}

export default PlaceCard;

{
  /* <div
onTouchStart={() => {
  handleTouchStart("https://www.linkedin.com/in/thomas-mannion-/");
}}
onClickEnd={() => {
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
onClickEnd={() => {
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
onClickEnd={() => {
  handleTouchStart("mailto:tmannion89@gmail.com");
}}
className="email trans-back"
>
<img className="contact-img" src={email} alt="email" />
</div>
<div className="back-content"></div> */
}
