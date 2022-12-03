import Button from "@mui/material/Button";

function ChooseButton({ spreadCards }) {
  return (
    <Button
      variant="contained"
      onClick={() => {
        spreadCards();
      }}
    >
      Deal the cards
    </Button>
  );
}

export default ChooseButton;
