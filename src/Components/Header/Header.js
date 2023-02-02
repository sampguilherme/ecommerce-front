import React, { useContext } from "react"
import { HeaderStyled, H1, Button } from "./style"
import CartIcon from "../../Assets/cart.svg"
import { useNavigate } from "react-router-dom"
import { goToCartPage, goToHomePage } from "../../Router/coordinator"
import { GlobalContext } from "../../contexts/GlobalContext"

export const Header = () => {

  const context = useContext(GlobalContext)
  const { calculateTotal } = context

  const navigate = useNavigate()
    return (
            <HeaderStyled>
              <H1 onClick={() => goToHomePage(navigate)}>GoldenFoot</H1>
              <Button onClick={() => {
                  goToCartPage(navigate)
                  calculateTotal()
                }}>
                <img src={CartIcon} alt="Cart icon"/>
              </Button>
            </HeaderStyled>
    )
}