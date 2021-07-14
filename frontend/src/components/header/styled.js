import styled, {css} from "styled-components"

export const leftDiv = styled.div`
    min-width: 25vw;
    max-width: 25vw;
    height: 12vh;
    background-color: #7F63F4;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width:768px){
        display: none;
    }
`

export const mindH1 = styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5rem;
    color: white;
    text-align: center;
    white-space: nowrap;
`

export const navDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 75vw;
    height: 12vh;
    ${props => props.className === "adm" && css`
        justify-content: space-between;
        align-items: center;
    `}

    @media(max-width:768px){
        width: 100vw;
        flex-direction: row-reverse;
        background-color: #E5E5E5;
    }
`

export const divInput = styled.div`
    position: relative;
    margin-left: 5%;
    display: flex;
    align-items: center;
    height: 60%;
    width: 27%;
    background-color: #F3F3F3;
    border-radius: 3px;

    @media(max-width:768px){
        display:none ;
    }
`

export const image = styled.img`
    position: relative;
    left: 10%;

    :hover{
        filter: brightness(20%);
    }
`

export const input = styled.input`
    margin-left: 20%;
    width: 80%;
    height: 100%;
    background-color: transparent;
    border: none;


    ::placeholder{
        text-align: initial;
    }

    :hover{
        filter: brightness(20%);
    }
`

export const logOut = styled.button`
    position: absolute;
    right: 3%;
    background-color:transparent;
    border: none;
    font-weight: bold;
    font-size: 100%;

    @media(max-width:768px){
        left: 10%;
    }
`