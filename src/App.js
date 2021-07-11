import { BrowserRouter, Switch, Route } from "react-router-dom"

import "./App.css"

import { SignUp, Login, Main, Dashboard } from "./pages"
import ProtectedRoute from "./routes"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Main} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
