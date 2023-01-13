import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    background-color: #354B59;
    text-align: center;
    color: white;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding: 0px 20px;
`

export const H1 = styled.h1`
    color: white;
    font-family: "Inter", sans-serif;
    font-size: 2rem;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #5B6C7E;
    border: 0px;
    border-radius: 5px;
    &:hover {
        background-color: #9C9C9C;
    }
`
 