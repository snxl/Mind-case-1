import { Component } from "react";

export default class PasswordCheck extends Component{
    render(){
        return(
            <div className="check_password_group">

                <label htmlFor="input_check_password">Confirmar senha</label>

                <input type="password" id="input_check_password" />

            </div>
        )
    }
}