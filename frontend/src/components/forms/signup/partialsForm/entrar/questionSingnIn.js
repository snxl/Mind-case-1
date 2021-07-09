import React from "react";
import { useHistory } from "react-router-dom";

import * as s from "./styles"

export default function SingInQuestion (props){

    const history = useHistory()

    function redirectSignIn(e){
        e.preventDefault()

        history.push("/login")
    }

        return(
            <s.div>

                <p>Já possui uma conta?
                    <s.a href="/#" onClick={(e)=> redirectSignIn(e)}>Entrar</s.a>
                </p>      
                
            </s.div>
        )
}