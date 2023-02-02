import styled from "styled-components";

export const Button = styled.button`
    width: 50%;
`

export const CardContainer = styled.section`
    display: flex;
    background-color: white;
    width: 900px;
    height: 100px;
    @media (max-width: 530px) {
        p, h2 {
            font-size: 15px;
        }
        button {
            width: 28px;
            height: 28px;
        }
    }
    @media (max-width: 400px) {
        p, h2 {
            font-size: 12px;
        }
        button {
            border-radius: 2px;
            width: 15px;
            height: 18px;
        }
    }
`

export const Image = styled.img`
    width: 12%;
    height: 100%;
    @media (max-width: 730px){
        width: 25%;
    }
`

export const ButtonAdd = styled.button`
    width: 38px;
    height: 38px;
    margin-left: 6px;
    border-radius: 6px;
    background-color: #EDF2F7;
    &:hover {
        background-color: #E2E8F0;
    }
`
export const ButtonRemove = styled.button`
    width: 38px;
    height: 38px;
    border-radius: 6px;
    margin-right: 6px;
    background-color: #EDF2F7;
    &:hover {
        background-color: #E2E8F0;
    }
`



export const P = styled.p`
    color: black;
    font-family: "Poppins", sans-serif;
    font-weight: lighter;
    font-size: 18px;
    margin-left: 20px;
`

export const DivInfo = styled.div`
    display: flex;
    width: 88%;
`

export const H2 = styled.h2`
    color: black;
    font-family:  "Poppins", sans-serif;
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;
`

export const DivName = styled.div`
    display: flex;
    align-items: center;
    width: 33.33%;
`

export const DivPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 10px;
    width: 33.33%;
`

export const DivQuant = styled.div`
    display: flex;
    align-items: center;
    width: 33.33%;
`