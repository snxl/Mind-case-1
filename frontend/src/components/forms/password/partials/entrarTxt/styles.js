import styled, { css } from "styled-components"

export const divH1 = styled.div`
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
    color: #03014C;

    padding-left: 9%;
    width: 80%;
    margin-top: 20px;
    margin-bottom: 10px;

    @media(max-width:800px){
        ${props => props.className && css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-left: 0%;
        font-size: 0.9rem;
        margin-top: -20px;
        `}
    }
`

export const h1 = styled.h1`
    margin-bottom: 5px;
`