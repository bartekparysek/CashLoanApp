import React from "react";
import { Link } from "react-router-dom";

export default function Invitation() {
  return (

    <div className="invitation" >
      <div className="invitation-details">
        <h1>Apply for a new Loan</h1>
        <p>Welcome to cash loan application!</p>
        <p>Please take next step and choose your loan parameters</p>
      </div>
      <Link to="/loanparams">
        <button className="ui button">Next</button>
      </Link>
    </div>
  );
}
