import React from "react";
import './ItemCard.css'

function ItemCard(props) {
    return (
        <div id="ItemCardBlock">
            <div class="ItemCardImgBlock">
                <img id="ItemCardImg" src={props.src} alt="Item Image" />
            </div>
            <h3 id="ItemCardName">{props.itemName}</h3>
            <p id="ItemCardSeller"> {props.itemSeller}</p>
            <p id="ItemCardPrice">${props.itemPrice}</p>
        </div>
    )
}

export default ItemCard;