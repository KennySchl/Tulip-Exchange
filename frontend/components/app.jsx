import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import SignUpFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import {logout} from '../util/session_api_util'

export const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1 className="logo-header">Tulip Exchange</h1>
      </Link>
      <button onClick={logout}>LOGOUT</button>
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
    </header>
    <Switch>
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <Route exact path="/" />
    </Switch>
  </div>
);
