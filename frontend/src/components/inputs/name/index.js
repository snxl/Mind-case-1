import React, { useState } from "react";

import * as s from "./styles"


export default function Name(props){

        return(
            <s.passwordGroup>

                <s.label>

                    <label htmlFor="input_password">Nome</label>

                </s.label>


                <s.input
                    type="text"
                    placeholder="Nome"
                    value={props.value}
                    onChange={(e)=> props.counter(e.target.value)}
                    onFocus={(e)=> e.target.style.opacity = "100%"}
                    onBlur={(e)=>  e.target.style.opacity = "50%"}
                />

            </s.passwordGroup>

        )
}