import React from "react";
import { useSelector } from "react-redux";
import CardItem from '../product-list/CardItem'

export function Favorites() {
    const favorites = useSelector(state => state.favorites)
    return (
        <div>
            <h1>My favorites</h1>
            <ul>
                {favorites.map(item => <CardItem image={item.images} title={item.title} rating={item.rating} price={item.price} category={item.category} brand={item.brand} />)}
            </ul>
        </div>
    )
}
