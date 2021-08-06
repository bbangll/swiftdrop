import React, { useState } from 'react';
import './LoginPage.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import FormButton from '../../components/FormButton/FormButton';
import FieldInput from '../../components/FieldInput/FieldInput';
import BtnIcon from '../../components/BtnIcon/BtnIcon';
import ItemCard from '../../components/ItemCard/ItemCard';
import BtnHome from '../../components/BtnHome/BtnHome';
import '../../../public/Plus.svg'
import HomeHeader from '../../components/HomeHeader/HomeHeader';

function LoginPage(props){

    return (

        <>
            <HomeHeader />
            <h1> Login </h1>
            <BtnIcon />
            <BtnIcon />
            <BtnHome />
            <ItemCard />
            <ItemCard />
            
        </>

    );
}

export default LoginPage;

