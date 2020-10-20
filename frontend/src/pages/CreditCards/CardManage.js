import React, { useState, useContext, useEffect } from "react";
import Typical from "react-typical";
import CreditCard from "../../components/CreditCards/CreditCard";
import classes from "./CardManage.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Authenticate } from "../../authContext";

const CardManage = (props) => {
  const auth = useContext(Authenticate);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const httpResult = await axios.get(
        `http://localhost:5000/api/cards/${auth.user_id}`
      );
      setCards(httpResult.data.card);
      console.log(cards);
    };

    fetchData();
  }, []);

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
        />
      ))}
    </div>
  );
};

export default CardManage;
