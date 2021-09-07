import Router from "./Routes/Router";
import GlobalState from "../src/GlobalContext/GlobalContext";
import Global from "./GlobalContext/GlobalStyles";

const App = () => {
  return (
    <GlobalState>
      <Global />
      <Router />
    </GlobalState>
  );
};

export default App;
