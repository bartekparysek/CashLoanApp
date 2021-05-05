import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoanParams from "../src/Components/LoanParams";
import ClientInfo from "../src/Components/ClientInfo";
import Invitation from "./Components/Invitation";
import Finish from "./Components/Finish";
import Header from './Components/Header';
import './styles.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        <div className="section">
          <Header />
          <Switch>
            <Route path="/" exact component={Invitation} />
            <Route path="/loanparams" component={LoanParams} />
            <Route path="/clientinfo" component={ClientInfo} />
            <Route path="/finish" component={Finish} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
