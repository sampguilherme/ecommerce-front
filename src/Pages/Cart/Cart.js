import React from "react"
import CardCart from "../../Components/CardCart/CardCart"
import { Header } from "../../Components/Header/Header"
import { priceFormmater } from "../../utils/priceFormatter"
import { Main, SectionTop, Div, SectionBottom, DivTotProd, DivValPrice, H3 } from "./style"

// import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react/dist"

export const Cart = (props) => {
    const { cart } = props

    const total = cart.reduce(
        (acc, product) => {
            return product.price * product.quantity + acc
        },
        0
    )

    return (
        <Main>
            <Header />
            <section>
                <Div>
                <SectionTop>
                    <DivTotProd>
                        <H3>Produto</H3>
                    </DivTotProd>
                    <DivValPrice>
                        <H3>Valor</H3>
                    </DivValPrice>
                </SectionTop>
                    {cart.map((games) => (
                        <CardCart games={games} key={games.id}/>
                    ))}
                <SectionBottom>
                    <DivTotProd>
                        <H3>Total</H3>
                    </DivTotProd>
                    <DivValPrice>
                        <H3>{priceFormmater.format(total)}</H3>
                    </DivValPrice>
                </SectionBottom>
                </Div>
            </section>
        </Main>
    )
}
