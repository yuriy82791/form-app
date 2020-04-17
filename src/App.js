import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./reset.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
export default function App() {
  return (
    <Router>
      <div className="site-container">
        <Switch>
          <Route exact path="/form-app/" component={SignIn} />
          <Route exact path="/form-app/registration" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}
