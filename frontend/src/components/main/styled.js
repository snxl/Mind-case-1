import styled, {css} from "styled-components";

export const navBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 88vh;
    max-width: 25vw;
    min-width: 25vw;
    @media(max-width: 768px){
        display: none;
    }
`

export const content = styled.div`
    position: relative;
    z-index: 5;
    display: inline-block;
    min-height: 88vh;
    min-height: 110vh;
    width: 75vw;
    background-color: #F3F6F9 ;

    @media(max-width:769px){
        width: 100vw;
        background-color:#E5E5E5; ;
    }
`

export const divMobile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: 5;
    bottom: -150px;
    background-color:#FFFFFF ;
    width: 100vw;
    height: 90vh;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;


    @media(min-width:769px){
        display: none;
    }
`

export const imageMobile = styled.img`
    position: relative;
    display: inline-block;
    top: -100px;
    right: 0;
    bottom: 0;
    left: 0;
   
    margin-left: auto;
    margin-right: auto;
`

export const h1Home = styled.h1`
    position: relative;
    bottom: 15%;
    white-space: nowrap;
`

export const name = styled.p`
    font-size: 1.4rem;
    color: #7F63F4;
`

export const divEmail = styled.div`
    position: relative;
    z-index:13%;
    bottom: 10%;
    width: 80vw;
    min-height: 5vh;
    background-color:#E5E5E5 ;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
`

export const email = styled.p`
    font-size: clamp(1rem, 3vw, 2rem);
`

export const editBtn = styled.button`
    position: relative;
    bottom: 2%;
    width: 80vw;
    min-height: 12vh;
    background-color:#E5E5E5 ;
    border-radius: 30px;
    border: none;
    margin-bottom: 300px;

    :active{
        filter: brightness(70%)
    }
`

export const transparentDiv = styled.div`
    width: 100%;
    height: 12vh;
`

export const form = styled.form`
    position: absolute;
    display: none;
    ${props => props.className === "form" && css`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        z-index: 60;
        background-color: white;
        width: 70%;
        min-height: 100vh;
        box-shadow: 0px 10px 30px 70px #0000001B;
        border-radius: 30px;

        @media(max-width:769px){
            display: flex;
            flex-direction: column;
            position: absolute;
            z-index: 60;
            top: -15%;
            width: 100%;
            height: 150vh;
            background-color: white;
        }
    
    `}
`

export const edit = styled.h2`
    ${props => props.className === "form" && css`

        text-align:center;
        font-family: "Open sans";
        margin: 12% 20px;
        
        @media(max-width:768px){
            margin: 20% 20px;
        }
    `}
`

export const formBtn = styled.button`
    padding: 50px;
    width: 80%;
    height: 50%;
    background-color:#7F63F4;
    position: relative;
    margin: 80px auto 0 auto ;
    border:none;
    border-radius:10px;

    @media(max-width: 768px){
        height: 12%;
    }
    

    :active{
        filter: brightness(70%);
    }
`

export const back = styled.p`
    font-size: 1.3rem;
    margin: 30px auto 60px auto;
`

export const divFunction = styled.div`
    
    ${props => console.log(props.className)}

    background-color: rgba(146, 124, 235, 0.362);
        border-left: solid #7F63F4 3px;

        
        :hover{
            background-color: rgba(146, 124, 235, 0.562);
        }

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 15px 0 15px 0;
    width: 95%;
    height: 10%;
    box-shadow: 0px 10px 30px 0px #0000001A;


`

export const imageUser = styled.img`

`

export const imageTrash = styled.img`
    margin-left: -8%;
`

export const nameFunctions = styled.p`
    margin-right: 20%;
`


export const divContentLarge = styled.div`
    position: absolute;
    top: 15%;
    z-index: 30;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    @media(max-width:769px){
        display: none;
    }
`

export const emailBar = styled.div`
    margin: 3% 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    width: 95%;
    height: 4%;
    background-color: #E5E5E5;
`

export const emailDiv = styled.p`
    font-size:0.8rem;
`

export const removeProfileDiv = styled.div`
    ${props =>props.className === "remove" && css`
        position: absolute;
        top: 25%;
        z-index: 700;
        left: -10%;
        width: 90%;
        min-height: 25%;
        background-color: white;
        box-shadow: 0px 10px 100px 50px #0000001B;
        border-radius: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    `}

    @media(max-width:768px){
        display: none;
    }

`

export const imageDelete = styled.img`
    ${props => props.className === "remove"? css`
        max-width: 30%;
    `: css`
        display: none;
    `}
`

export const divDeletButton = styled.div`
    ${props => props.className === "remove"? css`    
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    `: css`
        display: none;
    `}
`
export const question = styled.h2`
    font-family: "Open sans";
    color: #03014C;
`

export const divBtn = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
`

export const confirmBtn = styled.div`
    width: 40%;
    height: 45px;
    background-color: purple;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
export const cancelBtn = styled.div`
    width: 40%;
    height: 45px;
    background-color: #7F63F4;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const person = styled.div`
    width: 90%;
    height: 8%;
    display: flex;
    flex-direction: column;
`

export const types = styled.div`

    margin: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const nameType = styled.p`
    font-size: 1.4rem;
    font-family: "Open sans";
    color: black;
    margin-right: 3%;
`

export const users = styled.div`
    position: relative;
    border-radius: 10px;
    z-index: 100;
    width: 98%;
    display: flex;
    flex-direction: row;
    background-color: white;
    margin: 30px;
    margin-left: 20px;
    box-shadow: 0px 10px 10px 10px #0000001B;
`
export const contentId = styled.p`
    margin-top: 30px;
    margin-right:0;
    margin-bottom: 30px;
    margin-left: 7%;
    font-size: 1rem
`

export const contentName = styled.p`
    margin-top: 30px;
    margin-right:0;
    margin-bottom: 30px;
    margin-left: 14%;
    font-size: 1rem
`

export const contentEmail = styled.p`
    margin-top: 30px;
    margin-right:0;
    margin-bottom: 30px;
    margin-left: 7%;
    font-size: 1rem
`

export const contentCreate = styled.p`
    position: absolute;
    left: 75%;
    top:40%;
    font-size: 1rem
`