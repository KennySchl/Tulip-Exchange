import React from 'react';
import { Route, Switch, Link } from "react-router-dom";

import SignUpFormContainer from './session_form/signup_form_container'
import LoginFormContainer from './session_form/login_form_container'


export const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
      <h1>Tulip Exchange</h1>
      </Link>
    </header>
    <Switch>
    <Route path="/signup" component={SignUpFormContainer}/>
    <Route path="/login" component={LoginFormContainer} />
    </Switch>
  </div>
)