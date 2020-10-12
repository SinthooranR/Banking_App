import React from 'react';
import './Button.css';

const button = (props) => {
    return(
        <button className={`${props.danger && 'danger'}`}  onClick={props.onClick} type={props.type}>
            {props.children}
        </button>
    );
}

export default button;