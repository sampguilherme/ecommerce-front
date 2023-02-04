import React, { useContext } from "react"
import { HeaderStyled, H1, Button } from "./style"
import { useNavigate } from "react-router-dom"
import { goToCartPage, goToHomePage } from "../../Router/coordinator"
import { ImHome } from "react-icons/im";
import { IoCart } from "react-icons/io5";

export const Header = (props) => {

  const { isOnCart } = props

  const navigate = useNavigate()
    return (
            <HeaderStyled>
              <H1 onClick={() => goToHomePage(navigate)}>GoldenFoot</H1>
              {isOnCart ? 
                <Button onClick={() => goToHomePage(navigate)}>
                  <ImHome fontSize={"26px"}/>
                </Button>
                  :
                  <Button onClick={() => {
                    goToCartPage(navigate)
                  }}>
                  <IoCart fontSize={"26px"}/>
                </Button>
              }
              
            </HeaderStyled>
    )
}