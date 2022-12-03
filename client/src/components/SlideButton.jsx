import Button from "@mui/material/Button";
import { useState } from "react";
import hand from "../assets/hand_pointing_edit.png";

function SlideButton({ spreadCards, resetAllCards }) {
  const [reset, setReset] = useState(true);

  return reset ? (
    <div className="hand-wrapper">
      <Button
        className="deal-button"
        variant="contained"
        onClick={() => {
          spreadCards();
          resetAllCards();
          setReset(!reset);
        }}
      >
        Deal the Cards
      </Button>
      <img className="hand" src={hand} alt="reset" />
    </div>
  ) : (
    <Button
      variant="contained"
      onClick={() => {
        spreadCards();
        window.location.reload(false);
        setReset(!reset);
      }}
    >
      Reset Cards
    </Button>
  );
}

export default SlideButton;
