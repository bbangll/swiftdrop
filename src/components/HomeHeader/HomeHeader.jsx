import React from "react";
import BtnHome from "../BtnHome/BtnHome";
import BtnIcon from "../BtnIcon/BtnIcon";
import './HomeHeader.css'

function HomeHeader() {
    return (
        <div id="HomeHeaderBlock">
            <BtnHome />
            <div id="HomeHeaderButtons">
                <BtnIcon to="/login"/>
            </div>
        </div>
    )
}

export default HomeHeader;