import React from 'react';
import './Button.css';

const button = (props) => {
    return(
        <button className={`${props.danger && 'button--danger'}`}  onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default button;