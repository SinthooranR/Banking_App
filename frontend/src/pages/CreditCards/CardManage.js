import React, { useState, useContext, useEffect } from "react";
import CreditCard from "../../components/CreditCards/CreditCard";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { Authenticate } from "../../authContext";
import Button from "@material-ui/core/Button";
import classes from "./CardManage.module.css";

const CardManage = (props) => {
  const auth = useContext(Authenticate);
  const [cards, setCards] = useState([]);
  const history = useHistory();


  useEffect(() => {
    const fetchData = async () => {
      await axios.get(
        `http://localhost:5000/api/cards/${auth.user_id}`,
      )
        .then(function (response) {
          setCards(response.data.card);
        })
        .catch((error) => {
          // history.push("/authentication"); //ERROR REDIRECT TEST
          console.log(error);
        })
    };

    fetchData();

    // NEEDS TO BE FIXED
    // adding cards causes an infinite request loop
  }, [auth.user_id]);

  const editCardHandler = (cardID) => {
    auth.grabCard(cardID);
    alert(`${cardID}`);
    history.push("/editCards");
  }

  const deleteCardHandler = (cardID) => {
    auth.grabCard(cardID);
    alert(`${cardID}`);
    history.push("/deleteCards");
  }

  return (
    <div className={classes.Cards}>
      {cards.map((card) => (
        <div key={card.id}>
          <CreditCard
            key={card.id}
            bankName={card.bank}
            cardNumber={card.cardNumber}
            cardHolder={card.name}
            expireYear={card.expirationDate}
            cvcData={card.cvc}
          />
          <span style={{ display: "flex", width: "100%" }}>
            <Button
              color="primary"
              onClick={() => editCardHandler(card.id)}
              variant="contained"
            // style={{ display: "inline" }}
            >
              Update
        </Button>
            <Button
              color="secondary"
              onClick={() => deleteCardHandler(card.id)}
              variant="contained"
            // style={{ display: "inline" }}
            >
              Delete
        </Button>
            <h4>Current Balance: {card.balance}</h4>
          </span>
        </div>
      ))
      }
    </div >
  );
};

export default CardManage;
