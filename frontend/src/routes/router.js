import React from "react";
import PrivateRoute from "./privateRoutes.js";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom"

import signUpPage from "../pages/registro/"


export default function Router(){
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/registro" exact component={signUpPage} />
                    <Route path="/login" exact component={undefined} />
                    <PrivateRoute path="/perfil" exact component={signUpPage} />
                    <Redirect to="/registro" />
                </Switch>
            </BrowserRouter>
        </>
    )
}