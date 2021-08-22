import { Switch, Route, BrowserRouter } from "react-router-dom";
import ChatPage from "./pages/ChatPage/ChatPage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/about"></Route>
        <Route exact path="/users"></Route>
        <Route exact path="/">
          <ChatPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/cadastro">
          <SignUpPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
