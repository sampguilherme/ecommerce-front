import React from "react"
import CardCart from "../../Components/CardCart/CardCart"
import { Header } from "../../Components/Header/Header"
import { Main } from "./style"

export const Cart = (props) => {
    const { cart, games } = props
    return (
        <Main>
            <Header />
            <section>
                <h1>Cart</h1>
                <hr />
                {cart.map((games) => (
                    <CardCart games={games} key={Date.now() + 1}/>
                ))}
            </section>
        </Main>
    )
}
