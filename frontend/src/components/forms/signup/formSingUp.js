import {useState} from "react"
import { useHistory } from "react-router-dom"
import Cookie from "js-cookie"

import api from "../../../services/apiSignUp.js"
import setCookie from "../../../utils/setterCookie.js"

import Email from "../../inputs/email/"
import Password from "../../inputs/password/index.js"
import PasswordCheck from "../../inputs/passwordCheck/index.js"
import ButtonSingUp from "../../buttons/signup/index"
import SingInQuestion from "./partialsForm/entrar/questionSingnIn.js"
import Welcome from "./partialsForm/cadastroTxt/index.js"

import * as s from "./styles"

export default function Form(props){

  const history = useHistory()


  const [email, setEmail]= useState("")
  const [password, setPassword] = useState("")
  const [passwordCheck, setPasswordCheck] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [classInput, setClassEmail] = useState(false)
  const [passwordLength, setPasswordLengthError] = useState("")
  const [passwordLengthBoolean, setPasswordLengthErrorBoolean] = useState(false)
  const [passwordSmall, setPasswordSmallError] = useState("")
  const [passwordSmallBoolean, setPasswordSmallErrorBoolean] = useState(false)
  const [passwordCapital, setPasswordCapitalError] = useState("")
  const [passwordCapitalBoolean, setPasswordCapitalErrorBoolean] = useState(false)
  const [passwordNumber, setPasswordNumberError] = useState("")
  const [passwordNumberBoolean, setPasswordNumberErrorBoolean] = useState(false)
  const [passwordCheckError, setPasswordCheckError] = useState("")
  const [passwordCheckBoolean, setPasswordCheckErrorBoolean] = useState(false)

  async function register(event){

    event.preventDefault()

    if(password.length < 8){

      setPasswordLengthErrorBoolean(true)

      setPasswordLengthError("Deve conter 8 caracteres")
              
    }else{
      
      setPasswordLengthErrorBoolean(false)

      setPasswordLengthError(false)

    }
      
    if(!password.match(RegExp('(.*[a-z].*)'))){

      setPasswordSmallError("Deve conter 1 minin??sculo")
      
      setPasswordSmallErrorBoolean(true)
      
    }else{
      
      setPasswordSmallErrorBoolean(false)

      setPasswordSmallError(false)

    }
      
    if(!password.match(RegExp('(.*[A-Z].*)'))){

      setPasswordCapitalError("Deve conter 1 mai??sculo")
      
      setPasswordCapitalErrorBoolean(true)
      
    }else{
      
      setPasswordCapitalErrorBoolean(false)

      setPasswordCapitalError(false)
      
    }
      
    if(!password.match(RegExp('(.*\\d.*)'))){

      setPasswordNumberError("Deve conter 1 n??mero")
      
      setPasswordNumberErrorBoolean(true)
      
    }else{
      
      setPasswordNumberErrorBoolean(false)

      setPasswordNumberError(false)
      
    }

    if(password !== passwordCheck){

      setPasswordCheckError("Senhas diferentes")

      setPasswordCheckErrorBoolean(true)

    }else{

      setPasswordCheckErrorBoolean(false)

      setPasswordCheckError(false)

    }

    let req;

    if(
        !passwordLengthBoolean && 
        !passwordSmallBoolean && 
        !passwordCapitalBoolean && 
        !passwordNumberBoolean && 
        password === passwordCheck
      ){

      req = await api.post("",{
        email,
        password,
        passwordCheck
      })


      if(req.data.status === "error"){
        
        setErrorEmail("E-mail em uso")
        setClassEmail(true)
      
      }else{
        setErrorEmail(false)
        setClassEmail(false)
      }
    }

    if(req && req.data.status === "success"){
      
      setCookie(req.data.jsonwebtoken)

      history.push("/perfil")
    }

  }

    return (
      <>
      <s.divForm className="divForm">
        <s.form onSubmit={(event)=> register(event)} className="form_signup">

            <Welcome />

            <Email 
              counter={setEmail} 
              value={email} 
              emailError={errorEmail} 
              emailClass={classInput}
              require={true}
            />

            <Password 
              counter={setPassword} 
              passwordError={
                passwordLengthBoolean ||
                passwordSmallBoolean ||
                passwordCapitalBoolean ||
                passwordNumberBoolean? true : false
              }
              type="password"
              value={password} 
              error1={passwordLength} 
              error2={passwordSmall} 
              error3={passwordCapital} 
              error4={passwordNumber}
              require={true}
            />

            <PasswordCheck
             counter={setPasswordCheck} 
             value={passwordCheck}
             passwordCheckError={passwordCheckBoolean}
             error={passwordCheckError} 
             require={true}
            />

            <ButtonSingUp />

            <SingInQuestion/>

        </s.form>
      </s.divForm>
      
    </>
    )

}
