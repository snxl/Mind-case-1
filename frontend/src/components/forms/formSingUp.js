import {useState} from "react"
import Email from "../inputs/emailInputComponent.js"
import Password from "../inputs/passwordInputComponent.js"
import PasswordCheck from "../inputs/checkPasswordInputComponent.js"
import ButtonSingUp from "../buttons/buttonSingUp.js"
import SingInQuestion from "../partialsForm/questionSingnIn.js"
import Welcome from "../partialsForm/welcomeComponent.js"

import "../../styles/formSignUp.css"




export default function Form(props){

  const [count, setCount]= useState(0)

    return (
      <>
      <div id="form_signup">
        <form onSubmit={this} className="form_signup">

            <Welcome />

            <Email/>

            <Password />

            <PasswordCheck />

            <ButtonSingUp data={setCount} value={count} />

            <SingInQuestion />

        </form>
      </div>
      
    </>
    )

}
