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

export const CardContainer = styled.section`
    width: 300px;
    border-radius: 10px;
    height: 400px;
    box-shadow: 1px 1px 10px black;
    background-color: white;
    margin-left: 4px;
    margin-right: 4px;
    @media (max-width: 1200px){
        width: 250px;
        height: 350px;
    }

    @media (max-width: 1000px){
        width: 190px;
        height: 290px;
        p {
            font-size: 2vh;
        }
    }
    
    @media (max-width: 410px){
        width: 170px;
        height: 270px;
        p {
            font-size: 1.9vh;
        }
    }

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

