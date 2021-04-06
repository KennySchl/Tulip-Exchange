import React from 'react';
import { Route, Switch, Link } from "react-router-dom";

import SignUpFormContainer from './session_form/signup_form_container'

export const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
      <h1>Tulip Exchange</h1>
      </Link>
    </header>
    <Route path="/signup" component={SignUpFormContainer}/>
  </div>
)