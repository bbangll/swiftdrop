import React from 'react';
import '../../../public/Plus.svg'
import Plus from './Plus.svg';
import './BtnIcon.css'
import { Link } from "react-router-dom"

function BtnIcon(props) {
    return (
        <Link to={props.to} id="btnIcon">
            <img id="btnImage" src={Plus} alt="BigCo Inc. logo"/>
        </Link>
    );
  }

export default BtnIcon;