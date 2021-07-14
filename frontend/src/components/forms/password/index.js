import React, { useState } from "react";

import * as s from "./styled"

import Email from "../../inputs/email"
import Password from "../../inputs/password"
import ButtonSingIn from "../../buttons/singin";
import Tittle from "./partials/entrarTxt";
import SingUp from "./partials/cadastar";

import api from "../../../services/apiSignIn.js"
import setCookie from "../../../utils/setterCookie"
import { useHistory } from "react-router";

export default function SingInForm(props){

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const [invalidData, setInvalidData] = useState(false)

    const history = useHistory()

    async function submit(e){
        
        e.preventDefault()

        let req;

        if(email && password){
            try {
                req = await api.post("",{
                    email,
                    password
                })
            } catch (error) {
                req = error
            }
        }

        if(req && req.data.status === "success"){
            setCookie(req.data.jsonwebtoken)

            history.push("/perfil")
        }else{
            setInvalidData("Dados inválidos")
        }

    }


    return (
        <>
            <s.div className="divForm" onSubmit={(e)=> submit(e) } autocomplete="on" >
                <s.form>

                    < Tittle />

                    {invalidData && (
                        <s.span>
                            {invalidData}
                        </s.span>
                    )}

                    <Email
                        counter={setEmail} 
                        value={email} 
                        require={true}
                    />



                    <Password
                        value={password}
                        counter={setPassword}
                        image={true}
                        require={true}
                    />

                    <ButtonSingIn />

                    <SingUp />

                </s.form>
            </s.div>
        </>
    )



}