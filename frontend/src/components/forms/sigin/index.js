import React, { useState } from "react";

import * as s from "./styled"

import Email from "../../inputs/email"
import Password from "../../inputs/password"
import ButtonSingIn from "../../buttons/singin";
import Tittle from "./partials/entrarTxt";
import SingUp from "./partials/cadastar";

export default function SingInForm(props){

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const [passwordType, setPasswordType] = useState("password")


    return (
        <>
            <s.div className="divForm">
                <s.form>

                    < Tittle />

                    <Email
                        counter={setEmail} 
                        value={email} 
                    />

                    <Password
                        value={password}
                        counter={setPassword}
                        image={true}
                    />

                    <ButtonSingIn />

                    <SingUp />

                </s.form>
            </s.div>
        </>
    )
}