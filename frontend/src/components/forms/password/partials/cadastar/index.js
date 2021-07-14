import React from "react";
import { useHistory } from "react-router-dom";

import * as s from "./styles"

export default function SingUp (props){

    const history = useHistory()

    function redirectSignIn(e){
        e.preventDefault()

        history.push("/registro")
    }

        return(
            <s.div>

                <s.p>Não possui uma conta?
                    <s.a href="/#" onClick={(e)=> redirectSignIn(e)}> Registrar-se </s.a>
                </s.p>      
                
            </s.div>
        )
}