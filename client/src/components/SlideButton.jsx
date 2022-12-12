import hand from "../assets/hand_pointing_edit.png";

function SlideButton({ spreadCards, resetAllCards, reset, setReset }) {
  return reset ? (
    <div className="hand-wrapper">
      <div
        className="deal-button"
        onClick={() => {
          spreadCards();
          resetAllCards();
          setReset(!reset);
        }}
      ></div>
      <img className="hand" src={hand} alt="reset" />
    </div>
  ) : (
    <div className="hand-wrapper">
      <div
        className="reset-button"
        onClick={() => {
          window.location.reload(false);
          setReset(!reset);
        }}
      ></div>
      <img className="hand" src={hand} alt="reset" />
    </div>
  );
}

export default SlideButton;
