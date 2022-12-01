function SlideButton({spreadCards}) {
  return (
    <div>
      <button onClick={()=> {spreadCards()}}>Deal the cards</button>
    </div>
  );
}

export default SlideButton;