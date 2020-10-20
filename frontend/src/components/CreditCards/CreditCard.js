import React, { useState } from "react";
import CreditCardFront from "./CreditCardFront";
import CreditCardBack from "./CreditCardBack";

import classes from './CreditCard.module.css';

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
    creditCardPosition = <CreditCardBack cvc={props.cvcData} signature={props.signatureName}/>;
  }

  return (
    <div onClick={creditCardFlipHandler} className={classes.CreditCard}>
        {creditCardPosition}
    </div>
  );
};
export default CreditCard;
