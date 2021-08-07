import React, { useState } from 'react';
import './LoginPage.css';
import userService from '../../utils/userService';
import FormButton from '../../components/FormButton/FormButton';
import FieldInput from '../../components/FieldInput/FieldInput';
import FormNav from '../../components/FormNav/FormNav';
import '../../../public/Plus.svg'

function LoginPage(props){

    return (

        <div className="detailBlock">
            <FormNav />
            <h1 id="detailHeader"> Login </h1>
            <div id="formLine"></div>
            <form autoComplete="off">
                <FieldInput 
                    name="email"
                    type="email"
                    placeholder="e.g. Email Address"
                    labelText="Emaill Address"
                    required 
                />
                <FieldInput 
                    name="password"
                    type="password"
                    placeholder="Minimum 8 Characters"
                    labelText="Password"
                    required 
                />

                <FormButton type="submit" buttonText="Sign Up" />
            </form>
    </div>

    );
}

export default LoginPage;

