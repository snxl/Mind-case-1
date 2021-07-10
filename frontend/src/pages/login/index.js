import React from "react"

import background from "../../img/signup.svg"

import SingInForm from "../../components/forms/sigin"

import * as s from "./styled"

export default function Login(){

    return (
        <>
            
            <s.main>

                <s.img src={background} />

                <SingInForm />

            </s.main>
        
        </>
    )
}