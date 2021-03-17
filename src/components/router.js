import React from "react";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Profile from "routes/profile";
import Auth from "../routes/auth";
import Home from "../routes/home";
import Navigation from "./navigation";


const AppRouter = ({isLoggedIn}) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Redirect from ="*" to="/"/>
          </>
        ) : (
          <>
          <Route exact path="/">
            <Auth />
          </Route>
          <Redirect from ="*" to="/"/>
          </>
        )}
      </Switch>
    </Router>
  );
};
export default AppRouter;