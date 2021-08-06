import React from 'react';
import '../../../public/Plus.svg'
import Plus from './Plus.svg';
import './BtnIcon.css'

function BtnIcon(props) {
    return (
        <button id="btnIcon">
            <img id="btnImage" src={Plus} alt="BigCo Inc. logo"/>
        </button>
    );
  }

export default BtnIcon;