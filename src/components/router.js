import React from "react";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Profile from "routes/profile";
import Auth from "../routes/auth";
import Home from "../routes/home";
import Navigation from "./navigation";


const AppRouter = ({refreshUser, isLoggedIn, userObj}) => {
  return (
    <Router>
      {isLoggedIn && <Navigation userObj={userObj}/>}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home userObj = {userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile userObj={userObj} refreshUser={refreshUser} />
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