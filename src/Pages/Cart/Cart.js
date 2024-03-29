import React, { useContext, useEffect, useState } from "react"
import CardCart from "../../Components/CardCart/CardCart"
import { Header } from "../../Components/Header/Header"
import { GlobalContext } from "../../contexts/GlobalContext"
import { priceFormmater } from "../../utils/priceFormatter"
import { Main, SectionTop, Div, SectionBottom, DivTotProd, DivValPrice, H3, EmptyCart, H2Empty } from "./style"
import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { goToHomePage } from "../../Router/coordinator"

// import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react/dist"

export const Cart = () => {

    const navigate = useNavigate()

    const isOnCart = true

    const context = useContext(GlobalContext)
    const { 
            cart,
            totalValue
        } = context

    console.log(cart.length)

    return (
        <Main>
            <Header isOnCart={isOnCart}/>
            { cart.length < 1 ? 
                <Div>
                    <EmptyCart>
                        <H2Empty>Ainda não há itens em seu carrinho {":("}</H2Empty>
                        <Button onClick={() => goToHomePage(navigate)}>VOLTAR PARA O INÍCIO</Button>
                    </EmptyCart>
                </Div>
                :
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
                        <H3>{priceFormmater.format(totalValue)}</H3>
                    </DivValPrice>
                </SectionBottom>
                </Div>
            }
                
        </Main>
    )
}
