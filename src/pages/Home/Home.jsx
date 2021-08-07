import React, { useState, useEffect } from "react";
import AddPost from '../../components/AddPostForm/AddPostForm';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import { useHistory } from 'react-router-dom';
import ItemCard from "../../components/ItemCard/ItemCard";
import './Home.css'


function Home(props) {

    return (
        <div id="HomeBlock">
            <main id="HomeMain">
                <HomeHeader />
                <div id="itemBlock">
                    <ItemCard 
                        src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        itemName="Ferrari Black Italia"
                        itemSeller="Italian Rental"
                        itemPrice="$350.00/Night"
                    />
                    <ItemCard 
                        src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        itemName="Ferrari Black Italia"
                        itemSeller="Italian Rental"
                        itemPrice="$350.00/Night"
                    />
                    <ItemCard 
                        src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        itemName="Ferrari Black Italia"
                        itemSeller="Italian Rental"
                        itemPrice="$350.00/Night"
                    />
                    <ItemCard 
                        src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        itemName="Ferrari Black Italia"
                        itemSeller="Italian Rental"
                        itemPrice="$350.00/Night"
                    />
                    <ItemCard 
                        src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        itemName="Ferrari Black Italia"
                        itemSeller="Italian Rental"
                        itemPrice="$350.00/Night"
                    />
                    <ItemCard 
                        src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        itemName="Ferrari Black Italia"
                        itemSeller="Italian Rental"
                        itemPrice="$350.00/Night"
                    />
                    <ItemCard 
                        src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        itemName="Ferrari Black Italia"
                        itemSeller="Italian Rental"
                        itemPrice="$350.00/Night"
                    />
                    <ItemCard 
                        src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        itemName="Ferrari Black Italia"
                        itemSeller="Italian Rental"
                        itemPrice="$350.00/Night"
                    />
                    
                </div>
            </main>
            
        </div>
    );
}

export default Home;
