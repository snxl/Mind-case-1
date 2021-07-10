import { Route, Redirect } from "react-router-dom"
import getterCookie from "../utils/getterCookie"


export default function PrivateRoute ({component: Component, ...rest}){

    return(
        <Route {...rest} render={props => (
            getterCookie()?
                <Component {...props} />: 
                <Redirect to="/login" />
        )} />
    )
}