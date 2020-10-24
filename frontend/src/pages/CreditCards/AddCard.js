import React, { useState, useContext } from "react";
import classes from "./AddCard.module.css";
import { useHistory } from "react-router-dom";
import { Authenticate } from "../../authContext";
import axios from "axios";

const AddCard = (props) => {
  const [cardNumber, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expirationDate, setExpiration] = useState("");
  const [CVC, setCVC] = useState("");
  const [bank, setBank] = useState("");
  const [balance, setBalance] = useState("");
  const [errName, setErrName] = useState(false);
  const [errNumber, setErrNumber] = useState(false);
  const [errExpiration, setErrExpiration] = useState(false);
  const [errCVC, setErrCVC] = useState(false);
  const [errBalance, setErrBalance] = useState(false);

  const history = useHistory();
  const auth = useContext(Authenticate);

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

  const handleBalanceChange = (event) => {
    setBalance(event.target.value);
    if (!event.target.value) {
      setErrBalance(true);
    } else {
      setErrBalance(false);
    }
  };

  const handleButtonClick = (event) => {
    alert(`${name}, ${cardNumber}, ${expirationDate}, ${CVC}, ${bank}, ${balance}`);
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/cards/addCard", {
        userId: auth.user_id,
        name: name,
        bank: bank,
        cardNumber: cardNumber,
        cvc: CVC,
        expirationDate: expirationDate,
        balance: balance
      })
      .then((response) => {
        console.log(response);
        history.push("/cards");
      })
      .catch((error) => {
        // history.push("/authentication"); //ERROR REDIRECT TEST
        console.log(error);
      });

    history.push("/"); //redirects the user back to main page
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
            maxLength="16"
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
            <option defaultValue={true}>
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
            placeholder="Expiration Date"
            value={expirationDate}
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
          <label> Balance </label>
          <input
            type="number"
            placeholder="$0"
            value={balance}
            onChange={handleBalanceChange}
          />
          {errBalance && <p>Please enter your deposit amount</p>}
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
