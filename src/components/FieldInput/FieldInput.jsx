import React from 'react';
import { Input } from 'semantic-ui-react';
import "./FieldInput.css"

function FieldInput(props) {
    return (
        <div className="FieldInputBlock">
            <label htmlFor={props.name} id="FieldInputLabel">{props.labelText}</label>
            <input 
                type={props.type} 
                name={props.name}
                placeholder={props.placeholder}  
                id="FieldInput" 
                value={props.value}
                onChange={props.onChange}
            ></input>
            <div id="FieldInputLine"></div>
        </div>
    )
}

export default FieldInput;

