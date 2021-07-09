import React from "react"
import background from "../../img/signup.svg"
import FormSignUp from "../../components/forms/signup/formSingUp.js"

import * as s from "./styles"

export default function App(){
    return (
        <>
            <s.main>

                <s.img className="background" src={background} alt="backgroundImage" />

                <FormSignUp />

            </s.main>
        </>
    )
}