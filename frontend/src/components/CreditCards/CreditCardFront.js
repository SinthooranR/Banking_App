import React from "react";
import CreditCardChip from "../../assets/creditcardchip.png";

import classes from "./CreditCardFront.module.css";

const CreditCardFront = (props) => {
  return (
    <div className={classes.CardFront}>
      <h2>{props.bank}</h2>
      <img src={CreditCardChip} alt="avatar" />
      <h2> {props.number} </h2>
      <span>
        <h3> {props.name} </h3>
        <h3> {props.expiration} </h3>
      </span>
    </div>
  );
};

export default CreditCardFront;
