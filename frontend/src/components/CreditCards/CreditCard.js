import React, {useState} from 'react';
import CreditCardFront from './CreditCardFront';
import CreditCardBack from './CreditCardBack';

const CreditCard = (props) => {
    return (  
        <div>
            <CreditCardFront brand="Visa" number="3434 3434 2342 5452" name="Bob" expiration="03/20" />
            <CreditCardBack cvc="492"/>
        </div>
    );
}
export default CreditCard;