import styled from "styled-components";

export const Main = styled.main`
    background-color: #5A8199;
    min-height: 100vh;
    section{

        h1 {
            margin-left: 10px;
            color: white;
            margin-top: 32px;
            font-family: "Inter", sans-serif;
        }

        h2 {
            color: white;
            font-family: "Inter", sans-serif;
            margin-left: 10px;
        }

        hr {
            margin-top: 16px;
            margin-bottom: 16px
        }
    }
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`