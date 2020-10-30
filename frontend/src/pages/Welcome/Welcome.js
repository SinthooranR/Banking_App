import React from "react";
import Typical from "react-typical";
import classes from "./Welcome.module.css";
import CreditCard from "../../components/CreditCards/CreditCard";

const Welcome = () => (
  <div className={classes.Welcome}>
    <Typical
      steps={["Welcome", 3000, "Still in Development", 5000]}
      loop={Infinity}
      wrapper="h1"
    />
    <span>
      <h2 className={classes.SignUp}>Sign up for a credit card today!</h2>
      <CreditCard
        bankName="TD Canada Trust"
        cardNumber="5555 5555 5555 5555"
        cardHolder="John Doe"
        expireYear="2020-30"
        cvcData="333"
      />
    </span>
  </div>
);

export default Welcome;
