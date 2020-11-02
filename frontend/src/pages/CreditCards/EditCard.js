import React, { useState, useContext } from "react";
import classes from "./EditCard.module.css";
import { useHistory } from "react-router-dom";
import { Authenticate } from "../../authContext";
import axios from "axios";

const EditCard = (props) => {
  const [name, setName] = useState("");
  const [expirationDate, setExpiration] = useState("");
  const [deposit, setDeposit] = useState("");
  const [withdraw, setWithdraw] = useState("");

  const history = useHistory();
  const auth = useContext(Authenticate);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleExpirationChange = (event) => {
    setExpiration(event.target.value);
  };

  const handleDepositChange = (event) => {
    setDeposit(event.target.value);
  };
  const handleWithdrawChange = (event) => {
    setWithdraw(event.target.value);
  };
  const handleUpdateName = (event) => {
    event.preventDefault();
    axios
      .patch(`http://localhost:5000/api/cards/${auth.card_id}`, {
        name: name,
      })
      .then((response) => {
        console.log(response);
        history.push("/cards");
      })
      .catch((error) => {
        // history.push("/authentication"); //ERROR REDIRECT TEST
        console.log(error);
      });
  };
  const handleUpdateExpiration = (event) => {
    event.preventDefault();
    axios
      .patch(`http://localhost:5000/api/cards/${auth.card_id}/expiration`, {
        expirationDate: expirationDate,
      })
      .then((response) => {
        console.log(response);
        history.push("/cards");
      })
      .catch((error) => {
        // history.push("/authentication"); //ERROR REDIRECT TEST
        console.log(error);
      });
  };
  const handleWithdraw = (event) => {
    event.preventDefault();
    axios
      .patch(`http://localhost:5000/api/cards/${auth.card_id}/withdraw`, {
        withdraw: withdraw,
      })
      .then((response) => {
        console.log(response);
        history.push("/cards");
      })
      .catch((error) => {
        // history.push("/authentication"); //ERROR REDIRECT TEST
        console.log(error);
      });
  };
  const handleDeposit = (event) => {
    event.preventDefault();
    axios
      .patch(`http://localhost:5000/api/cards/${auth.card_id}/deposit`, {
        deposit: Number(deposit),
      })
      .then((response) => {
        console.log(response);
        history.push("/cards");
      })
      .catch((error) => {
        // history.push("/authentication"); //ERROR REDIRECT TEST
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <h2 className={classes.HeaderMessage}> Update Current Card </h2>
      <div className={classes.EditCardForm}>
          <form>
          <label> Name </label>
          <input
            type="text"
            placeholder="Enter Your Full Name"
            value={name}
            onChange={handleNameChange}
          />
           <button type="submit" onClick={handleUpdateName}>
          {" "}
          Submit{" "}
        </button>
          </form>
          <form>
          <label> Expiration </label>
          <input
            type="month" // work around
            placeholder="Expiration Date"
            value={expirationDate}
            onChange={handleExpirationChange}
          />
           <button type="submit" onClick={handleUpdateExpiration}>
          {" "}
          Submit{" "}
        </button>
          </form>
          <form>
          <label> Deposit </label>
          <input
            type="number"
            placeholder="$0"
            value={deposit}
            onChange={handleDepositChange}
          />
          <button type="submit" onClick={handleDeposit}>
          {" "}
          Submit{" "}
        </button>
          </form>
          <form>
          <label> Withdraw </label>
          <input
            type="number"
            placeholder="$0"
            value={withdraw}
            onChange={handleWithdrawChange}
          />
          <button type="submit" onClick={handleWithdraw}>
          {" "}
          Submit{" "}
        </button>
          </form>
      </div>
    </React.Fragment>
  );
};

export default EditCard;
