import React, { useState } from "react";
import CreditCardFront from "./CreditCardFront";
import CreditCardBack from "./CreditCardBack";

import classes from "./CreditCard.module.css";

const CreditCard = (props) => {
  const [creditCardFlip, setCreditCardFlip] = useState(false);

  const creditCardFlipHandler = (event) => {
    setCreditCardFlip((creditCardFlip) => !creditCardFlip);
    event.preventDefault();
  };

  let creditCardPosition;

  if (!creditCardFlip) {
    creditCardPosition = (
      <CreditCardFront
        bank={props.bankName}
        number={props.cardNumber}
        name={props.cardHolder}
        expiration={props.expireYear}
      />
    );
  } else {
    creditCardPosition = (
      <CreditCardBack cvc={props.cvcData} signature={props.signatureName} />
    );
  }

  let creditCardColor;

  switch (props.bankName) {
    case "TD Canada Trust":
      creditCardColor = classes.TD;
      break;
    case "Royal Bank of Canada":
      creditCardColor = classes.RBC;
      break;
    case "Bank of Montreal":
      creditCardColor = classes.BMO;
      break;
    case "Bank of Nova Scotia":
      creditCardColor = classes.BNS;
      break;
    default:
      console.log("UNKNOWN DATA");
  }

  return (
      <div
        onClick={creditCardFlipHandler}
        className={creditCardColor}
      >
        {creditCardPosition}
      </div>
  );
};
export default CreditCard;
