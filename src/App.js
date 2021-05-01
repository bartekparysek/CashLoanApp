import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoanParams from "../src/Components/LoanParams";
import ClientInfo from "../src/Components/ClientInfo";
import Invitation from "./Components/Invitation";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Invitation} />
          <Route path="/loanparams" component={LoanParams} />
          <Route path="/clientinfo" component={ClientInfo} />
        </Switch>
      </div>
    </Router>
  );
}
