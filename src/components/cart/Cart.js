import React from "react";
import { useSelector } from "react-redux";
import CardItem from '../product-list/CardItem'

export function Cart() {
    const cart = useSelector(state => state.cart)
    return (
        <div>
            <h1>cart</h1>
            <ul>
                {cart.map(item => <CardItem image={item.images} title={item.title} rating={item.rating} price={item.price} category={item.category} brand={item.brand} />)}
            </ul>
        </div>
    )
}