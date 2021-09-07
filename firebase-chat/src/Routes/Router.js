import React, { useContext } from "react";
import { useLayoutEffect, useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainPage from "../pages/ChatPage/MainPage/Index";
import { LoginPage } from "../pages/LoginPage";
import { SignUpPage } from "../pages/SignUpPage";
import firebase from "firebase";
import { ChatContext } from "../GlobalContext/GlobalContext";

const Router = () => {
  const [authLoading, setAuthLoading] = useState(true);
  const [googleUserId, setGoogleUserId] = useState();
  const { setters } = useContext(ChatContext);

  console.log(googleUserId);
  useLayoutEffect(() => {
    return firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setters.setCurrentUser(user);
      } else {
        setters.setCurrentUser(null);
      }
      setAuthLoading(false);
    });
  }, []);

  return (
    <BrowserRouter>
      {!authLoading && (
        <Switch>
          <Route exact path="/">
            <MainPage googleUserId={googleUserId} />
          </Route>
          <Route exact path="/login">
            <LoginPage setGoogleUserId={setGoogleUserId} />
          </Route>
          <Route exact path="/cadastro">
            <SignUpPage />
          </Route>
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default Router;
