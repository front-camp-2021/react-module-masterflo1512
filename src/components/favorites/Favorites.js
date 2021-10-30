import React from "react";
import { useSelector } from "react-redux";

export function Favorites() {
    const favorites = useSelector(state => state.favorites)
    return (
        <div>
            <h1>My favorites</h1>
            <ul>
                {favorites.map(elem => <li>{elem}</li>)}
            </ul>
        </div>
    )
}
