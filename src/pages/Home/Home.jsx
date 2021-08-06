import React, { useState } from "react";
import FieldInput from '../../components/FieldInput/FieldInput';
import FileInput from '../../components/FileInput/FileInput';
import FormButton from '../../components/FormButton/FormButton';
import { useHistory } from 'react-router-dom';

function Home() {
    const [selectedFile, setSelectedFile] = useState('')
    const [state, setState] = useState({
        itemName: ''
    })

    function handleFileInput(e){
        setSelectedFile(e.target.files[0])
    }

    function handleChange(e){
        setState({
          ...state,
          [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
                 
        const formData = new FormData()
        formData.append('photo', selectedFile)
        formData.append('itemName', state.itemName)
        
        // Have to submit the form now! We need a function!
    }


    return (
        <div className="detailBlock">
            <h1 id="detailHeader"> Sign Up page </h1>
            <div id="formLine"></div>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <FieldInput 
                    name="itemName"
                    type="text"
                    placeholder="e.g. John"
                    labelText="Item Name"
                    value={state.itemName}
                    onChange={handleChange}
                    required 
                />
                <FileInput 
                    type="file"
                    name="photo"
                    placeholder="upload image"
                    onChange={handleFileInput}
                />

                <FormButton type="submit" buttonText="Create Item" />
            </form>
        </div>
    );
}

export default Home;
