import React from  "react";
import * as s from "./styles"



export default function Email(props){

        return(
            <s.emailGroup>

                <s.label className="label">
                
                    <label htmlFor="input_email">E-mail</label>
                
                </s.label>


                <s.input error={props.emailClass}
                    type="email"
                    placeholder="Youraddres@email.com"
                    value={props.value}
                    onChange={(e)=> props.counter(e.target.value)}
                    onFocus={(e)=> e.target.style.opacity = "100%"}
                    onBlur={(e)=> e.target.style.opacity = "50%" }
                    required={props.require}
                />

                <s.error>
                    {props.emailError? (
                            <s.withoutError className="error">
                                {props.emailError}
                            </s.withoutError>
                    ):(<></>)}
                </s.error>

            </s.emailGroup>
        )
}