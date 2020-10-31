import React from "react";
import Typical from "react-typical";
import classes from "./Welcome.module.css";
import CreditCard from "../../components/CreditCards/CreditCard";
import WelcomeGraph from "../../assets/welcomepagegraph.png";

const Welcome = () => (
  
  <div className={classes.Welcome}>
    <Typical
      steps={["Welcome", 3000, "Still in Development", 5000]}
      loop={Infinity}
      wrapper="h1"
    />
    <h3 className={classes.SignUp}>Select from a variety of low interest option plans today.</h3>
    <span>
    <img className={classes.WelcomeImage} src={WelcomeGraph} />
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
