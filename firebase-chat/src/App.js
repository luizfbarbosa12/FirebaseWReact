import { useLayoutEffect, useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ChatPage from "./pages/ChatPage/ChatPage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import firebase from "firebase";

const App = () => {
  const [currentUser, setCurrentUser] = useState();
  const [authLoading, setAuthLoading] = useState(true);

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
            <ChatPage currentUser={currentUser} />
          </Route>
          <Route exact path="/login">
            <LoginPage currentUser={currentUser} />
          </Route>
          <Route exact path="/cadastro">
            <SignUpPage currentUser={currentUser} />
          </Route>
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default App;
