import "./Card.scss";
import { useEffect, useState } from "react";

function Card({ flip, CardContent, zindex, slide, amount }) {
  const [translate, setTranslate] = useState("");
  const [spreadAmount, setSpreadAmount] = useState(0);

  const x = spreadAmount;
  const y = spreadAmount;

  const spreadAmountCard = () => {
    setSpreadAmount(amount);
  };

  const doTransform = () => {
    if (slide) {
      spreadAmountCard();
    }
    if (flip === "card") {
      setTranslate(`translate(${x}px, ${y}px)`);
    } else {
      setTranslate(
        `perspective(1000px) translate(${x}px, ${y}px) rotateY(-180deg)`
      );
    }
  };

  useEffect(() => {
    doTransform();
  }, [spreadAmount, flip, zindex, slide]);

  const styles = {
    transform: translate,
    zIndex: `${zindex}`,
  };
  return (
    <div className={`${flip}`} style={styles}>
      {CardContent}
    </div>
  );
}

export default Card;
