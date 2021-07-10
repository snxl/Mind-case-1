import styled from "styled-components";

export const div = styled.div`
    margin-left: 10%;
    margin-bottom: 10px;

    @media(max-width:768px){
        display: flex;
        justify-content: center;
        width: 100%;
        margin-left: 0%;
    }
`

export const a = styled.a`
    margin-left: 1%;
    text-decoration: none;
`

export const p = styled.p`
    white-space: nowrap;
`