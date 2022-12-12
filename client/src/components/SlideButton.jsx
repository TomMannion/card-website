import Button from "@mui/material/Button";
import { useState } from "react";
import hand from "../assets/hand_pointing_edit.png";
import banner from "../assets/banner.png";

function SlideButton({ spreadCards, resetAllCards }) {
  const [reset, setReset] = useState(true);

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
          spreadCards();
          window.location.reload(false);
          setReset(!reset);
        }}
      ></div>
      <img className="hand" src={hand} alt="reset" />
    </div>
  );
}

export default SlideButton;
