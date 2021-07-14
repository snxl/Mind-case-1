import React from "react"
import {useHistory} from "react-router-dom"
import * as s from "./styled"
import Cookies from "js-cookie"

import lupa from "../../img/lupa.svg"

import dataToken from "../../utils/dataToken"


export default function Header (props){

    const history = useHistory()

    function exit(e){
        e.preventDefault()

        Cookies.remove("token")
        history.push("/login")
    }


    return (
        <>
            <s.leftDiv>

                <s.mindH1>
                    Mind Education
                </s.mindH1>

            </s.leftDiv>
            
            <s.navDiv className="adm">
                    
                    {dataToken().credential > 1 && (
                        <s.divInput teste>
                            <s.image src={lupa} />
            
                            <s.input
                                placeholder="Search..."
                            />
                    
                        </s.divInput>
                    )}


                    <s.logOut className="reds" onClick={(e)=> exit(e)}>
                        Logout
                    </s.logOut>

            </s.navDiv>

            
        </>
    )
}