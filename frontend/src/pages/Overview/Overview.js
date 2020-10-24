import React, { useContext, useState, useEffect } from "react";
import Typical from "react-typical";
import axios from "axios";
import { Authenticate } from "../../authContext";
import classes from "./Overview.module.css";

const Overview = () => {
  const auth = useContext(Authenticate);
  // const [username , setUsername ] = useState("");
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Grabs user result from the User Schema
      const httpResult = await axios.get(
        `http://localhost:5000/api/users/${auth.user_id}`
      );
      // setUsername(httpResult.data.user.username);
      setName(httpResult.data.user.name);
      console.log(httpResult);


      // Grabs the Balance data from Card Schema
      let sum = 0;
      const httpResultCard = await axios.get(
        `http://localhost:5000/api/cards/${auth.user_id}`
      );

      for (let i = 0; i < httpResultCard.data.card.length; i++) {
        console.log(sum += httpResultCard.data.card[i].balance);
      }
      setBalance(sum);
    };

    fetchData();

  }, [auth.user_id]);

  return (
    <div className={classes.Overview}>
      <Typical
        steps={[
          `Welcome, ${name}!`,
          3000,
          "Here is your overview",
          5000,
        ]}
        loop={Infinity}
        wrapper="h2"
      />

      <h2>Total Balance: {balance}</h2>
    </div>

  )
};

export default Overview;
