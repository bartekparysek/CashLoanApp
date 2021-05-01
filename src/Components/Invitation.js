import React from "react";
import { Link } from "react-router-dom";

export default function Invitation() {
  return (
    <div>
      <h1>Apply for new Loan</h1>
      <p>Welcome to cash loan application</p>
      <p>Please take next step and choose your parameters</p>
      <Link to="/loanparams">
        <button className="ui button">Next</button>
      </Link>
    </div>
  );
}
