import styled from "styled-components"

export const divH1 = styled.div`
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
    color: #03014C;

    padding-left: 9%;
    width: 80%;
    margin-top: 40px;
    margin-bottom: 40px;

    @media(max-width:800px){
        ${props => props.className && `
        font-size: 0.9rem;
        margin-top: -20px;
        `}
    }
`