import React from 'react';
import './Backdrop.css';

const backdrop = (props) => (
    props.show ? <div className="Backdrop" onClick={props.closeBackDrop}> </div> : null
);

export default backdrop;