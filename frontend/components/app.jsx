import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import SignUpFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import StocksContainer from "./stocks/stocks_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import Main from './main'

import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { logout } from "../util/session_api_util";
import NavBar from "./nav_bar/nav_bar";

export const App = () => {
  return (
    <div>
      <header>
     

        {/* <Switch>
          

        </Switch>
        <Link to="/" className="header-link">
          <h1 className="logo-header">Tulip Exchange</h1>
        </Link>
        <button onClick={logout}>LOGOUT</button>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link> */}
        <button onClick={logout}>LOGOUT</button>
      </header>
      <Switch>
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <Route exact path="/" component={Main} />
      </Switch>
      {/* <ProtectedRoute path="/stocks" component={StocksContainer} /> */}
      <Route path="/" />
    </div>
  );
};
