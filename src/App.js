import { ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Router from "./Router/Router";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (productToAdd) => {
      const newCart = [...cart]

      const productFound = newCart.find((productInCart) => productInCart.id === productToAdd.id)

      if(!productFound){
        const newProduct = {...productToAdd, quantity: 1}
        newCart.push(newProduct)
      } else {
        productFound.quantity++
      }

      setCart(newCart)
  }

  

  return (
    <ChakraProvider>
      <GlobalStyle/>
      <Router 
        addToCart={addToCart}
        cart={cart}
      />
    </ChakraProvider>
  )
}

export default App;
