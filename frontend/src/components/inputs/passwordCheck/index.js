import React, { useState } from "react";

import * as s from "./styles"

export default function PasswordCheck(props){

        return(
            <s.checkPasswordGroup>

                <s.label>

                    <label htmlFor="input_check_password">Confirmar senha</label>

                </s.label>

                <s.input error={props.passwordCheckError}
                    type="password"
                    value={props.value}
                    placeholder="Confirmar senha ****"
                    onChange={(e)=> props.counter(e.target.value)}
                    onFocus={(e)=> e.target.style.opacity = "100%"}
                    onBlur={(e)=> e.target.style.opacity = "50%"}
                    required
                />

                {props.passwordCheckError?(
                    <s.error>

                        <s.withoutError>
                            {props.error}
                        </s.withoutError>
                
                     </s.error>
                ): (<></>)}


            </s.checkPasswordGroup>
        )
}