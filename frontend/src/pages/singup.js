import React from "react"
import background from "../img/signup.svg"
import FormSignUp from "../components/forms/formSingUp.js"

import "../styles/pageSignUp.css"

export default function App(){
    return (
        <>
            <header></header>
            <main>

                <img className="background" src={background} alt="backgroundImage" />

                <FormSignUp />

            </main>
            <footer></footer>
        </>
    )
}