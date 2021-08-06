import React from "react";
import './FormButton.css';

function FormButton(props) {
    return <button type={props.type} id="FormButton">{props.buttonText}</button>
}

export default FormButton;
