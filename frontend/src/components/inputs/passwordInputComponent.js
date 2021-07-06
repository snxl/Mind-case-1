import { Component } from "react";

export default class Password extends Component{
    render(){
        return(
            <div className="password_group">

                <label htmlFor="input_password">Senha</label>

                <input type="password" id="input_password" required/>

            </div>
        )
    }
}