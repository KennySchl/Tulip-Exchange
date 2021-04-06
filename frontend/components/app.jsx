import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import SignUpFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

export const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Tulip Exchange</h1>
      </Link>
    </header>
    <Switch>
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <Route exact path="/" />
    </Switch>
  </div>
);
