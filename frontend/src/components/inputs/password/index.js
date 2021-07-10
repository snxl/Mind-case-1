import React, { useState } from "react";

import * as s from "./styles"

import showBtn from "../../../img/showPassword.svg"


export default function Password(props){

    const [type , setType] = useState("password")

    function typePassword(e){

        e.preventDefault()

        type === "password"?
                setType("text"):
                setType("password")
    }

        return(
            <s.passwordGroup>

                <s.label>

                    <label htmlFor="input_password">Senha</label>

                </s.label>

               <s.divInput>

                    <s.input 
                        error={props.passwordError} 
                        type={type}
                        placeholder="Senha ****"
                        value={props.value}
                        onChange={(e)=> props.counter(e.target.value)}
                        onFocus={(e)=> e.target.style.opacity = "100%"}
                        onBlur={(e)=>  e.target.style.opacity = "50%"}
                        required
                    />

                    {props.image && (
                        <s.btn>
                            <s.image src={showBtn} onClick={(e) => typePassword(e)} />   
                        </s.btn>
                    )}

               </s.divInput>

                
                {props.passwordError? (
                    <s.error>
                        <s.withoutError>{props.error1}</s.withoutError>
                        <s.withoutError>{props.error2}</s.withoutError>
                        <s.withoutError>{props.error3}</s.withoutError>
                        <s.withoutError>{props.error4}</s.withoutError>
                    </s.error>
                ):(<></>)}



            </s.passwordGroup>
        )
}