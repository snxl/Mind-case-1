import React from "react";
import PrivateRoute from "./privateRoutes.js";
import PublicRoute from "./publicRoute.js";
import { Switch, BrowserRouter, Redirect } from "react-router-dom"

import signUpPage from "../pages/registro/"
import singInPage from "../pages/login"
import Profile from "../pages/perfil"

export default function Router(){
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <PublicRoute path="/registro" exact component={signUpPage} />
                    <PublicRoute path="/login" exact component={singInPage} />
                    <PrivateRoute path="/perfil" exact component={Profile} />
                    <Redirect to="/perfil" />
                </Switch>

            </BrowserRouter>
        </>
    )
}