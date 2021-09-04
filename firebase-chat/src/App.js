import Router from "./Routes/Router";
import GlobalState from "../src/GlobalContext/GlobalContext";

const App = () => {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
};

export default App;
