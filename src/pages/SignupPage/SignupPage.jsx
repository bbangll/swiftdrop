import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import userService from '../../utils/userService';
import { useHistory } from 'react-router-dom';
import FieldInput from '../../components/FieldInput/FieldInput';
import FormButton from '../../components/FormButton/FormButton';
import FileInput from '../../components/FileInput/FileInput';
import './SignupPage.css'

export default function SignUpPage(props){

    const history = useHistory();
    const [state, setState] = useState({
        firstName: '',
        email: '',
        password: '',
        passwordConf: '',
        address: ''
    })

    const [selectedFile, selSelectedFile] = useState('')
    const [error, setError ] = useState('error')
   

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    function handleFileInput(e) {
        console.log(e.target.files)
        selSelectedFile(e.target.files[0])
    }

    async function handleSubmit(e) {
        e.preventDefault()

        // Photos have to be sent over using FormData,
        // they are sent over to the server in multiple requests
        const formData = new FormData()
        formData.append('photo', selectedFile)
        
        for (let fieldName in state){
            console.log(fieldName, state[fieldName])
            // append the rest of the data to the form obejct
            formData.append(fieldName, state[fieldName])
        }

        try {
            console.log(formData.forEach((item) => console.log(item)))
            await userService.signup(formData);
            props.handleSignupOrLogin()
            history.push('/login')

        } catch(err){
            console.log(err.message)
            setError(err.message)
        }
     
    }

    return (
        <div className="detailBlock">
            <h1 id="detailHeader"> Sign Up page </h1>
            <div id="formLine"></div>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <FieldInput 
                    name="firstName"
                    type="text"
                    placeholder="e.g. John"
                    labelText="First Name"
                    value={ state.firstName}
                    onChange={handleChange}
                    required 
                />
                <FieldInput 
                    name="email"
                    type="email"
                    placeholder="e.g. Email Address"
                    labelText="Emaill Address"
                    value={ state.emailaddress}
                    onChange={handleChange}
                    required 
                />
                <FieldInput 
                    name="password"
                    type="password"
                    placeholder="Minimum 8 Characters"
                    labelText="Password"
                    value={ state.password}
                    onChange={handleChange}
                    required 
                />
                <FieldInput 
                    name="passwordConf"
                    type="password"
                    placeholder="Minimum 8 Characters"
                    labelText="Password"
                    value={ state.passwordConf}
                    onChange={handleChange}
                    required 
                />
                <FieldInput 
                    name="address"
                    type="text"
                    placeholder="e.g. 56 Wandon st, Queensland"
                    labelText="Address"
                    value={ state.address}
                    onChange={handleChange}
                    required 
                />

                <FileInput 
                    type="file"
                    name="photo"
                    placeholder="upload image"
                    onChange={handleFileInput}
                />

                <FormButton type="submit" buttonText="Sign Up" />

                {error ? <ErrorMessage error={error} /> : null}
            </form>
        </div>
    );   
    
}
