import React from "react";
import Logo from './Logo.svg';
import './BtnHome.css'

function BtnHome() {
    return (
        <div id="btnHomeBlock">
            <img id="btnHomeImg" src={Logo} alt="BigCo Inc. logo"/>
            <h1 id="btnHomeTxt">SwiftDrop.</h1>
        </div>
    )
}

export default BtnHome;