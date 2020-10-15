import React from "react"; 
import CreditCardChip from '../../assets/creditcardchip.png'
const CreditCardFront = (props) => {
    return ( 
        <div>
            <h2>{props.brand}</h2>
            <img src={CreditCardChip}/>
            <h2> {props.number} </h2>
            <h3> {props.name} </h3>
            <h3> {props.expiration} </h3>
        </div>
     );
}

export default CreditCardFront;