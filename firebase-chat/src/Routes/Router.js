import React from "react";
import { useLayoutEffect, useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainPage from "../pages/ChatPage/MainPage/Index";
import { LoginPage } from "../pages/LoginPage";
import { SignUpPage } from "../pages/SignUpPage";
import firebase from "firebase";

const Router = () => {
  const [currentUser, setCurrentUser] = useState();
  const [authLoading, setAuthLoading] = useState(true);
  const [googleUserId, setGoogleUserId] = useState();

  useLayoutEffect(() => {
    return firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
      setAuthLoading(false);
    });
  }, []);

  return (
    <BrowserRouter>
      {!authLoading && (
        <Switch>
          <Route exact path="/">
            <MainPage googleUserId={googleUserId} currentUser={currentUser} />
          </Route>
          <Route exact path="/login">
            <LoginPage
              setGoogleUserId={setGoogleUserId}
              currentUser={currentUser}
            />
          </Route>
          <Route exact path="/cadastro">
            <SignUpPage currentUser={currentUser} />
          </Route>
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default Router;
