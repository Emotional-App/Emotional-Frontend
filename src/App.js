import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SignUp, Login, Main } from "./pages";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
