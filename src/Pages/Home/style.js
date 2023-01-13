import styled from "styled-components";

export const DivPrincipal = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    background-color: #5A8199;
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
    width: 40px;
    height: 4vh;
    background-color: #5B6C7E;
    border: 0px;
    border-radius: 0px 8px 8px 0px;
    &:hover {
        background-color: #9C9C9C;
    }
` 

export const InputNome = styled.input`
    height: 4vh;
    border: 1px solid #5B6C7E;
    width: 16vw;
    padding: 10px;
    border-radius: 8px 0px 0px 8px;
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
    gap: 16px;
    justify-content: space-around;
    margin-top: 20px;
    margin-bottom: 20px;
    
`

export const DivInput = styled.div`
    display: flex;
    margin-top: 10px;
    width: 97%;
`


export const H2 = styled.h2`
    margin-top: 10px;
    font-family: "Inter", sans-serif;
`

