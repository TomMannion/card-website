import "./Card.scss";
import "./Contact.scss";

function PlaceCard() {
  return (
    <>
      <div className="contact front"></div>
      <div className="back">
        <div className="linkedin trans-back">
          <a href="">LinkedIn</a>
        </div>
        <div className="github trans-back">
          <a href="">GitHub</a>
        </div>
        <div className="email trans-back">
          <a href="">Email</a>
        </div>
        <div className="back-content"></div>
      </div>
    </>
  );
}

export default PlaceCard;
