import React, { useState, useContext, useEffect } from "react";
import CreditCard from "../../components/CreditCards/CreditCard";
import classes from "./CardManage.module.css";
import axios from "axios";
import { Authenticate } from "../../authContext";

const CardManage = (props) => {
  const auth = useContext(Authenticate);
  const [cards, setCards] = useState([]);


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

  return (
    <div className={classes.Cards}>
      {cards.map((card) => (
        // <div key={card.id}>{card.bank}</div>
        <CreditCard
          key={card.id}
          bankName={card.bank}
          cardNumber={card.cardNumber}
          cardHolder={card.name}
          expireYear={card.expirationDate}
          cvcData={card.cvc}
          balance={card.balance}
        />
      ))}
    </div>
  );
};

export default CardManage;
