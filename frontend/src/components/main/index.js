import React, { useState }  from "react"
import { useHistory } from "react-router-dom"

import axios from "axios"
import Cookies from "js-cookie"


import apiDelete from "../../services/apiDelete"

import dataToken from "../../utils/dataToken"

import * as s from "./styled"


import Email from "../inputs/email/index"
import Name from "../inputs/name/index"
import Password from "../inputs/password"
import PasswordCheck from "../inputs/passwordCheck"

import developerImage from "../../img/developerMobile.svg"
import userIcon from "../../img/user_icon.svg"
import Lixeira from "../../img/Lixeira2.svg"
import imageDelete from "../../img/imagedelete.svg"
import dashboard from "../../img/dashboard.svg"

export default function Main (props){

    const history = useHistory()

    const token = dataToken()

    const [main, setMain] = useState(false)

    const [userName] = useState(token.name)
    const [userEmail] = useState(token.email)
    const [userCredential] = useState(token.credential)

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordCheck, setPasswordCheck] = useState("")

    const [passwordLength, setpasswordLength] = useState("")
    const [passwordSmall, setpasswordSmall] = useState("")
    const [passwordCapital, setpasswordCapital] = useState("")
    const [passwordNumber, setpasswordNumber] = useState("")

    const [errorPassword, seterrorPassword] = useState(false)

    

    const [passwordValidation, setErrorPasswords] = useState(false)

    const [update, setForm] = useState("")
    const [deleted, setDelete] = useState("")

    const [user1, setUser1] = useState({})
    const [user2, setUser2] = useState({})
    const [user3, setUser3] = useState({})
    const [user4, setUser4] = useState({})
    const [user5, setUser5] = useState({})

    
    function openEditor(e){

        e.preventDefault()

        if(deleted)return

        update? setForm(""): setForm("form")
        
    }

    function openDeleted(e){

        e.preventDefault()

        if(update)return

        deleted? setDelete(""): setDelete("remove")
        
    }



    async function updated(e){

        e.preventDefault()

        if(!email) setEmail(undefined)
        if(!name) setName(undefined)
        if(!password) setPassword(undefined)
        if(!passwordCheck) setPasswordCheck(undefined)

        let req;

        if(password){

            if(password.length < 8) setpasswordLength("Deve conter 8 caracteres")
            else setpasswordLength("")

            if(!password.match(RegExp('(.*[a-z].*)')))  setpasswordSmall("Deve conter 1 mininúsculo")
            else setpasswordSmall("")
        
            if(!password.match(RegExp('(.*[A-Z].*)'))) setpasswordCapital("Deve conter 1 maiúsculo")
            else setpasswordCapital("")
        
            if(!password.match(RegExp('(.*\\d.*)'))) setpasswordNumber("Deve conter 1 número")
            else setpasswordNumber("")
        
        }

        if(password !== passwordCheck){

            setErrorPasswords("Senhas inválidas")

        }else setErrorPasswords(false)


        if(
            passwordLength &&
            passwordSmall &&
            passwordCapital &&
            passwordNumber
        ){
            seterrorPassword(false)

        }else {
            seterrorPassword(true)
        }

        
        if(errorPassword){

            const tokenUser = Cookies.get("token")

            const create = axios.create({
                method:"PUT",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${tokenUser}`,
                },
                validateStatus: function (status) {
                    return status
                },
                baseURL:"https://localhost:3500/users/update"
            })

            req = await create.put("",{
                email,
                name,
                password,
                passwordCheck
            })

            if(req && req.data.status === "success"){

                Cookies.remove("token")
    
                Cookies.set("token", req.data.jsonwebtoken)
    
                history.push("/profile")
                
            }
        }




    }

    async function removeAccount(e){

        e.preventDefault()

        const req = await apiDelete.delete("")

        if(req.data.status === "success"){

            Cookies.remove("token")

            history.push("/profile")

        }
    }

    async function translateMain(e){

        e.preventDefault()

        main? setMain(false): setMain(true)

        const tokenUser = Cookies.get("token")

        if(!main){
            const create = axios.create({
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${tokenUser}`,
                },
                validateStatus: function (status) {
                    return status
                },
                baseURL:"https://localhost:3500/users/admin/allusers"
            })
    
            const allUsers = await create.get("")
    

            if(allUsers.data[0])setUser1(allUsers.data[0])
            else setUser1(false)
            if(allUsers.data[1])setUser2(allUsers.data[1])
            else setUser2(false)
            if(allUsers.data[2])setUser3(allUsers.data[2])
            else setUser3(false)
            if(allUsers.data[3])setUser4(allUsers.data[3])
            else setUser4(false)
            if(allUsers.data[4])setUser5(allUsers.data[4])
            else setUser5(false)

        }
    }

    return (

        <>
            <s.navBar>

                <s.emailBar>
                    
                    <s.emailDiv>
                        {userEmail}
                    </s.emailDiv>
                    
                </s.emailBar>

                {userCredential > 1 && (
                    <s.divFunction onClick={(e)=> translateMain(e)}>
                        <s.imageUser src={dashboard} />
                
                        <s.nameFunctions  >
                            Dashboard
                        </s.nameFunctions>
                    </s.divFunction>
                )}

                <s.divFunction onClick={(e)=> openEditor(e)}>
                    <s.imageUser src={userIcon} />

                    <s.nameFunctions  >
                        Editar perfil
                    </s.nameFunctions>
                </s.divFunction>

                <s.divFunction onClick={(e)=> openDeleted(e)}>
                    <s.imageTrash src={Lixeira} />

                    <s.nameFunctions  >
                        Excluir conta
                    </s.nameFunctions>
                </s.divFunction>

            </s.navBar>
            {!main && (
                <s.content>

                <s.divContentLarge>
                    <s.h1Home>
                        Bem vindo <s.name>{userName} </s.name>
                    </s.h1Home>

                    <s.imageUser src={developerImage} />
                </s.divContentLarge>
               

                <s.divMobile>

                    <s.imageMobile src={developerImage} />

                    <s.h1Home>
                        Bem vindo  <s.name> {userName} </s.name>
                    </s.h1Home>

                    <s.divEmail>

                        <s.email>
                                {userEmail}
                        </s.email>

                    </s.divEmail>

                    <s.editBtn onClick={(e)=> openEditor(e)}>
                        Editar perfil
                    </s.editBtn>



                </s.divMobile>

                <s.form className={update} onSubmit={(e)=> updated(e)}>

                    <s.edit className={update}>
                        Editar perfil
                    </s.edit>
                    
                    <Email
                        value={email} 
                        counter={setEmail}
                        require={email? true: false} 
                    />

                    <Name
                        value={name} 
                        counter={setName} 
                        require={false}    
                    />

                    <Password 
                        value={password} 
                        counter={setPassword} 
                        require={passwordCheck? true: false} 
                        passwordError={passwordValidation}
                        error1={passwordLength}  
                        error2={passwordSmall}
                        error3={passwordCapital} 
                        error4={passwordNumber} 
                    />

                    <PasswordCheck
                        value={passwordCheck} 
                        counter={setPasswordCheck}
                        require={password? true: false}
                        passwordCheckError={passwordValidation}
                        error={passwordValidation}
                    />

                    <s.formBtn>
                        Enviar
                    </s.formBtn>

                    <s.back onClick={(e) => openEditor(e)}>
                        volta
                    </s.back >

                </s.form>

                <s.removeProfileDiv className={deleted}>
                    <s.imageDelete src={imageDelete} className={deleted} />

                    <s.divDeletButton className={deleted}>

                        <s.question>
                             Você realmente deseja <br /> excluir o usuário?
                        </s.question>

                        <s.divBtn >

                            <s.confirmBtn onClick={(e)=> removeAccount(e)}>
                                Confirmar
                            </s.confirmBtn>

                            <s.cancelBtn onClick={(e)=> openDeleted(e)}>
                                Não
                            </s.cancelBtn>

                        </s.divBtn>
                    </s.divDeletButton>
                </s.removeProfileDiv>

            </s.content>
            )}

            {main && (
                <s.content>
                    
                    
                    <s.person>

                        <s.types>

                            <s.nameType>
                                #
                            </s.nameType>

                            <s.nameType>
                                Nome
                            </s.nameType>

                            <s.nameType>
                                Email
                            </s.nameType>

                            <s.nameType>
                                Data de cadastro
                            </s.nameType>

                        </s.types>

                        {user1 && (
                            <s.users>         
                                <s.contentId>
                                    {user1.id}
                                </s.contentId>
                                <s.contentName>
                                    {user1.name}
                                </s.contentName>
                                <s.contentEmail>
                                    {user1.email}
                                </s.contentEmail>
                                <s.contentCreate>
                                    {user1.createdAt.split("T")[0]}
                                </s.contentCreate>                   
                            </s.users>                            
                        )}

                        {user2 && (
                            <s.users>         
                                <s.contentId>
                                    {user2.id}
                                </s.contentId>
                                <s.contentName>
                                    {user2.name}
                                </s.contentName>
                                <s.contentEmail>
                                    {user2.email}
                                </s.contentEmail>
                                <s.contentCreate>
                                    {user2.createdAt.split("T")[0]}
                                </s.contentCreate>                   
                           </s.users>
                        )}


                        {user3 && (
                            <s.users>
                                <s.contentId>
                                    {user3.id}
                                </s.contentId>
                                <s.contentName>
                                    {user3.name}
                                </s.contentName>
                                <s.contentEmail>
                                    {user3.email}
                                </s.contentEmail>
                                <s.contentCreate>
                                    {user3.createdAt.split("T")[0]}
                                </s.contentCreate>        
                            </s.users>
                        )}

                        {user4 && (
                            <s.users>           
                                <s.contentId>
                                    {user4.id}
                                </s.contentId>
                                <s.contentName>
                                    {user4.name}
                                </s.contentName>
                                <s.contentEmail>
                                    {user4.email}
                                </s.contentEmail>
                                <s.contentCreate>
                                    {user4.createdAt.split("T")[0]}
                                </s.contentCreate>                         
                            </s.users>
                        )}

                        {user5 && (
                            <s.users>    
                                <s.contentId>
                                    {user5.id}
                                </s.contentId>
                                <s.contentName>
                                    {user5.name}
                                </s.contentName>
                                <s.contentEmail>
                                    {user5.email}
                                </s.contentEmail>
                                <s.contentCreate>
                                    {user5.createdAt.split("T")[0]}
                                </s.contentCreate>        
                            </s.users>
                        )}

                    </s.person>


                </s.content>
            )}
        </>
    )
}