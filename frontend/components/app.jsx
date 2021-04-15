import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import SignUpFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import SplashPage from "../components/splash_page/splash_page";
import ProtNavBar from "./nav_bar/prot_nav_bar_container";
import StockShowContainer from "./stocks/stock_show_container";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

export const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/" component={SplashPage} />
        <ProtectedRoute path="/portfolio" component={ProtNavBar} />
        <ProtectedRoute
          exact
          path="/stocks/:stockSymbol"
          component={StockShowContainer}
        />
      </Switch>
    </div>
  );
};
