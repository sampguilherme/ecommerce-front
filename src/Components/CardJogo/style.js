import styled from "styled-components";

export const Button = styled.button`
    width: 60%;
    height: 4vh;
    border-radius: 8px;
    border: 0px;
    color: white;
    font-family: "Poppins", sans-serif;
    font-weight: medium;
    background-color: #5B6C7E;
    margin-bottom: 5px;
    &:hover {
        
    }
`

export const Buttona = styled.button`
    
    margin-top: 10px;
    width: 40px;
    height: 4vh;
    background-color: #5B6C7E;
    border: 0px;
    border-radius: 0px 8px 8px 0px;
    &:hover ${Button}{
        background-color: #9C9C9C;
    }
` 

export const CardContainer = styled.section`
    width: 16vw;
    border-radius: 10px;
    
    box-shadow: 1px 1px 10px black;
    background-color: white;
`

export const Image = styled.img`
    width: 100%;
    height: 70%;
    border-radius: 10px 10px 0px 0px;
`

export const GameName = styled.p`
    color: black;
    font-family:  "Poppins", sans-serif;
    font-size: 2.5vh;
    font-weight: bold;
`

export const P = styled.p`
    color: black;
    font-family: "Poppins", sans-serif;
    font-weight: lighter;
    font-size: 2.5vh;
`