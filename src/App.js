import { ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Router from "./Router/Router";
import { GlobalContext } from "./contexts/GlobalContext";
import jogos from "./jogos.json"
import { GlobalState } from "./contexts/GlobalStates";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function App() {

  const context = GlobalState()

  return (
    <ChakraProvider>
      <GlobalContext.Provider value={context}>
        <GlobalStyle/>
        <Router/>
      </GlobalContext.Provider>
    </ChakraProvider>
  )
}

export default App;
