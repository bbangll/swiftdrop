import React from "react";
import FieldInput from "../FieldInput/FieldInput";
import FormButton from "../FormButton/FormButton";

function Form(props) {
    return (
        <form autoComplete="off" onSubmit={props.handleSubmit}></form>
    )
}

export default Form;