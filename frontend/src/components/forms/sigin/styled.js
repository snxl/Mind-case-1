import styled, { css } from "styled-components"

export const div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    width: 37vw;
    min-height: 60%;
    border-radius:25px;
    background-color: white;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;

    @media(max-width:1000px){
        ${props => props.className && css`
            width:50vw !important;
            min-height: 78vh !important;
        `}
    }

    @media(max-width:768px){
        ${props => props.className && css`
            height:100vh;
            width: 100vw !important;
            border-radius: 0px;
    `}
    }



`

export const form = styled.form`
    width: 80%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media(max-width:768px){    
        ${props => props.className && `
            width: 90% !important;
        `}
    }
`