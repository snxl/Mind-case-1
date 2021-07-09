import React from "react";

import * as s from "./styles"


export default function Password(props){

        return(
            <s.passwordGroup>

                <s.label>

                    <label htmlFor="input_password">Senha</label>

                </s.label>

               
                <s.input error={props.passwordError} 
                    type="password"
                    placeholder="Senha ****"
                    value={props.value}
                    onChange={(e)=> props.counter(e.target.value)}
                    onFocus={(e)=> e.target.style.opacity = "100%"}
                    onBlur={(e)=>  e.target.style.opacity = "50%"}
                    required
                />
                
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