import { StatUpArrow } from "@chakra-ui/react";
import styled from "styled-components";

export const DivPrincipal = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    background-color: #143249;
    min-height: 120vh;
    
`

export const DivFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    width: 1400px;
`

export const ButtonI = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 38px;
    background-color: #5B6C7E;
    border: 0px;
    border-radius: 0px 8px 8px 0px;
    &:hover {
        background-color: #63707c;
    }
` 

export const InputNome = styled.input`
    height: 38px;
    border: 1px solid #5B6C7E;
    width: 16vw;
    padding: 10px;
    border-radius: 8px 0px 0px 8px;
    @media (max-width: 800px) {
        width: 28vw;
    }
`

export const Carrinho = styled.section`
    background-color: lightgray;
    box-shadow: 0px 6px 20px black;
    height: 112vh;
`

export const Input = styled.input`
    height: 3vh;
    border: 0px;
    border-radius: 2px;
    margin-top: 4px;
`


export const Select = styled.select`
    width: 95%;
    height: 3vh;
    margin-top: 4px;
    border: 0px;
    border-radius: 2px;
`

export const GamesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-around;
    margin-top: 20px;
    margin-bottom: 20px;
    
`

export const DivInput = styled.div`
    display: flex;
    margin-top: 10px;
    width: 74%;
    
    
`


export const H2 = styled.h2`
    margin-top: 10px;
    font-family: "Inter", sans-serif;
`

export const Section = styled.section`
    display: flex;
    height: 100%;
    width: 50%;
`

export const SectionFiltros = styled.section`
    display: flex;
    height: 100%;
    justify-content: end;
    width: 50%;
`