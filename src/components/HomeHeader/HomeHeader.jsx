import React from "react";
import BtnHome from "../BtnHome/BtnHome";
import BtnIcon from "../BtnIcon/BtnIcon";
import './HomeHeader.css'

function HomeHeader() {
    return (
        <div id="HomeHeaderBlock">
            <BtnHome />
            <div id="HomeHeaderButtons">
                <BtnIcon />
            </div>
        </div>
    )
}

export default HomeHeader;