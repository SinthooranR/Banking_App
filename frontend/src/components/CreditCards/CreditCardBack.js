import React from 'react';
import classes from './CreditCardBack.module.css';

const CreditCardBack = (props) => {
    return ( 
        <div className={classes.CardBack}>
            <span>{props.signature}</span>
            <h2>{props.cvc}</h2>
        </div>
     );
}
 
export default CreditCardBack;