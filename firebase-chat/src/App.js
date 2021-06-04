import { Switch, Route, BrowserRouter } from "react-router-dom";
import ChatPage from "./pages/ChatPage/ChatPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/about"></Route>
        <Route exact path="/users"></Route>
        <Route exact path="/">
          <ChatPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
