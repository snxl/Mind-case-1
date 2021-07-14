import styled from "styled-components"

export const passwordGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom:5px;
`

export const input = styled.input`
    border: none;
    border-color: red;
    border-bottom: ${props => props.error?  "red solid 1px" :  "black solid 1px"};
    width: 80%;
    opacity: 50%;
    margin-top: 10px;
    padding-bottom: 10px;
    padding-top: 10px;
    background-color: none;
    padding-right: 30%;

    ::placeholder{
        font-family:  'Open Sans', sans-serif;
    }
`
export const label = styled.div`
    width: 80%;
`

export const error = styled.div`
    width: 80%;
    color: red;
`

export const withoutError = styled.span`
    display: block;
`

export const divInput = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
`

export const btn = styled.button`
    background: none;
    border: none;
    width: 15%;
    height: 80%;
    position: absolute;
    right: 13%;
    top: 35%;
`