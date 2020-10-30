import React, { useState, useContext } from "react";
import classes from "./EditCard.module.css";
import { useHistory } from "react-router-dom";
import { Authenticate } from "../../authContext";
import axios from "axios";

const EditCard = (props) => {
    const [name, setName] = useState("");
    const [expirationDate, setExpiration] = useState("");
    const [balance, setBalance] = useState("");
    const [errName, setErrName] = useState(false);
    const [errExpiration, setErrExpiration] = useState(false);
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

    const handleExpirationChange = (event) => {
        setExpiration(event.target.value);
        if (!event.target.value) {
            setErrExpiration(true);
        } else {
            setErrExpiration(false);
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
        alert(`${name}, ${expirationDate}, ${balance}`);
        event.preventDefault();
        axios
            .patch(`http://localhost:5000/api/cards/${auth.card_id}`, {
                name: name,
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
                    {errName && <p>Please enter your full name</p>}
                    <label> Expiration </label>
                    <input
                        type="month" // work around
                        placeholder="Expiration Date"
                        value={expirationDate}
                        onChange={handleExpirationChange}
                    />
                    {errExpiration && <p>Please enter expiration date</p>}

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

export default EditCard;
