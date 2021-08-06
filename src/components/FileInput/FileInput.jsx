import React from "react";
import './FileInput.css'

function FileInput(props) {
    return (
        <input type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.onChange}></input>
    )
}


export default FileInput;