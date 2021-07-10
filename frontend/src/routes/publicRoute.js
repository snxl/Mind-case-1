import { Route, Redirect } from "react-router-dom"
import getterCookie from "../utils/getterCookie";

export default function PublicRoute({component: Component, ...rest}){

    return (
        <Route {...rest} render={props=>(
            getterCookie()?
                <Redirect to="profile" />:
                <Component {...props} />
        )} />
    )
} 