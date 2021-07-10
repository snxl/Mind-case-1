import styled from "styled-components";

export const div = styled.div`
    margin-left: 10%;

    @media(max-width: 768px){
        margin-left: 0%;
        width: 100%;
        display: flex;
        justify-content: center;
    }
`

export const a = styled.a`
    margin-left: 1%;
    text-decoration: none;
`

export const p = styled.p`
    white-space: nowrap;
`