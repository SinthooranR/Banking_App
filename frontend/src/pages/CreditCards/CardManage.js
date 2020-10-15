import React from "react";
import Typical from "react-typical";
import CreditCard from '../../components/CreditCards/CreditCard'
import classes from "./CardManage.module.css";

const CardManage = (props) => (
  <div className={classes.Cards}>
    <CreditCard bankName="TD" cardNumber="3314 4321 2341 4321" cardHolder="Bob Jones" expireYear="02-22" cvc2="321" signatureName="Bob Jones"/>
    <CreditCard bankName="TD" cardNumber="3314 4321 2341 4321" cardHolder="Bob Jones" expireYear="02-22" cvc2="321"/>
    <CreditCard bankName="TD" cardNumber="3314 4321 2341 4321" cardHolder="Bob Jones" expireYear="02-22" cvc2="321"/>
    <CreditCard bankName="TD" cardNumber="3314 4321 2341 4321" cardHolder="Bob Jones" expireYear="02-22" cvc2="321"/>
    <CreditCard bankName="TD" cardNumber="3314 4321 2341 4321" cardHolder="Bob Jones" expireYear="02-22" cvc2="321"/>
    <CreditCard bankName="TD" cardNumber="3314 4321 2341 4321" cardHolder="Bob Jones" expireYear="02-22" cvc2="321"/>
  </div>
);

export default CardManage;