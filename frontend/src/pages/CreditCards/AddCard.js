import React, { useState } from "react";
import classes from "./AddCard.module.css";
const AddCard = (props) => {
  const [cardNumber, setNumber] = useState();
  const [name, setName] = useState();
  const [expiration, setExpiration] = useState();
  const [CVC, setCVC] = useState();
  const [bank, setBank] = useState();
  const [errName, setErrName] = useState(false);
  const [errNumber, setErrNumber] = useState(false);
  const [errBank, setErrBank] = useState();
  const [errExpiration, setErrExpiration] = useState();
  const [errCVC, setErrCVC] = useState();
  const handleNameChange = (event) => {
    setName(event.target.value);
    if (!event.target.value) {
      setErrName(true);
    } else {
      setErrName(false);
    }
  };
  const handleNumberChange = (event) => {
    setNumber(event.target.value);
    if (!event.target.value) {
      setErrNumber(true);
    } else {
      setErrNumber(false);
    }
  };

  const handleBankChange = (event) => {
    setBank(event.target.value);
    if (!event.target.value) {
      setErrBank(true);
    } else {
      setErrBank(false);
    }
  };
  const handleExpirationChange = (event) => {
    setExpiration(event.target.value);
    if (!event.target.value) {
      setErrExpiration(true);
    } else {
      setErrExpiration(false);
    }
  };
  const handleCVCChange = (event) => {
    setCVC(event.target.value);
    if (!event.target.value) {
      setErrCVC(true);
    } else {
      setErrCVC(false);
    }
  };
  const handleButtonClick = (event) => {
    alert(`${name}, ${cardNumber}, ${expiration}, ${CVC}, ${bank}`);
    event.preventDefault();
  };

  return (
    <React.Fragment> 
        <h2 className={classes.HeaderMessage}> Sign up for a Credit Card </h2> 
      <div className={classes.AddCardForm}>
        <form>
          <label> Name </label>
          <input
            type="text"
            placeholder="Enter Your Full Name"
            value={name}
            onChange={handleNameChange}
          />
          {errName && <p>Please enter your full name</p>}
          <label> Card Number </label>
          <input
            type="tel" // work around
            maxlength="16"
            placeholder="Enter Your 16 Digit Card Number"
            value={cardNumber}
            onChange={handleNumberChange}
          />
          {errNumber && <p>Please enter credit card number</p>}
          <label> Bank </label>
          <select
            placeholder="Please select your bank"
            value={bank}
            onChange={handleBankChange}
          >
            <option selected="true" disabled="disabled">
              {" "}
              Select your Bank{" "}
            </option>
            <option> Bank of Montreal </option>
            <option> TD Canada Trust </option>
            <option> Royal Bank of Canada </option>
            <option> Bank of Nova Scotia </option>
          </select>
          <label> Expiration </label>
          <input
            type="month" // work around
            maxlength="4"
            placeholder="Expiration Date"
            value={expiration}
            onChange={handleExpirationChange}
          />
          {errExpiration && <p>Please enter expiration date</p>}
          <label> CVC </label>
          <input
            type="number"
            placeholder="Enter CVC"
            value={CVC}
            onChange={handleCVCChange}
          />
          {errCVC && <p>Please enter CVC</p>}
        </form>
        <button type="submit" onClick={handleButtonClick}>
          {" "}
          Submit{" "}
        </button>
      </div>
    </React.Fragment>
  );
};

export default AddCard;
