import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #143249;
    min-height: 100vh;
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
    margin-top: 50px;
    @media (max-width: 930px){
        section {
            width: 700px
        }
    }
    @media (max-width: 730px) {
        section {
            width: 500px
        }
    }
    @media (max-width: 530px){
        section {
            width: 390px
        }
    }
    @media (max-width: 400px){
        section {
            width: 290px
        }
    }
`

export const SectionTop = styled.section`
    display: flex;
    background-color: white;
    width: 900px;
    margin-bottom: 1px;
    border-radius: 4px 4px 0px 0px;
    height: 40px;
`
export const SectionBottom = styled.section`
    display: flex;
    background-color: white;
    width: 900px;
    margin-bottom: 1px;
    border-radius: 0px 0px 4px 4px;
    height: 40px;
    margin-top: 1px;
`

export const DivTotProd = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    
`

export const DivValPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 50%;
    
`

export const H3 = styled.h3`
    font-family: "Inter", sans-serif;
    margin: 0px 10px;
`

export const EmptyCart = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 900px;
    border-radius: 4px;
    height: 400px;
    justify-content: center;
    align-items: center;
`

export const H2Empty = styled.h2`
    color: black;
    font-family: "Poppins", sans-serif;
    font-weight: lighter;
    font-size: 26px;
    margin-bottom: 12px;
`