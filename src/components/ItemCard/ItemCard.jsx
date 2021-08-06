import React from "react";
import './ItemCard.css'

function ItemCard() {
    return (
        <div id="ItemCardBlock">
            <div class="ItemCardImgBlock">
                <img id="ItemCardImg" src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="W3Schools.com" />
            </div>
            <h3 id="ItemCardName">Ferrari Italia 458</h3>
            <p id="ItemCardSeller"> Italian Rentals</p>
            <p id="ItemCardPrice">$350.00/Day</p>
        </div>
    )
}

export default ItemCard;