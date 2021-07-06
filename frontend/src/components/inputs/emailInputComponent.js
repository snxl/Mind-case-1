import { Component } from "react";

import "../../styles/inputEmail.css"

export default class Email extends Component{
    render(){
        return(
            <div className="email_group">

                <div className="label">
                
                    <label htmlFor="input_email">E-mail</label>
                
                </div>


                <input type="email" autocomplete="on" id="input_email" required />

            </div>
        )
    }
}