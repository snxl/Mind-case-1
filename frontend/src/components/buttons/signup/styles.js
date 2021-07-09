import styled from "styled-components"

export const div = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom:5px
`

export const btn = styled.button`
    background-color: #7F63F4;
    color: white;
    border: none;
    width: 80%;
    height: 100%;
    border-radius: 15px;
    font-family: 'Open Sans', sans-serif;

    :hover{
        filter: brightness(80%);
    }

    :active{
        filter: brightness(60%);
    }
`