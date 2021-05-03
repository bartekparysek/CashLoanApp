import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoanParams() {
  const [loan, setLoan] = useState({
    amount: 1000,
    period: 6,
    installment: null,
    interestRate: 7.2,
    interest: null,
    apr: null,
    totalPayOff: null
  });

  const calculateLoanParams = () => {
    const loanPeriodDays = Math.round(loan.period * 30.41666);
    const totalInterest = parseFloat((((loan.amount * parseFloat((loan.interestRate / 100).toFixed(3))) / 365) * loanPeriodDays).toFixed(2));
    const totalPayOff = parseInt(loan.amount) + totalInterest;
    const installment = parseFloat((totalPayOff / loan.period).toFixed(2));
    const apr = parseFloat(((((totalPayOff / loan.amount) ** (365 / loanPeriodDays)) - 1) * 100).toFixed(2));

    setLoan({
      ...loan,
      interest: totalInterest,
      totalPayOff,
      installment,
      apr,
    });
  };

  const handleAmountChange = (event) => {
    setLoan({
      ...loan,
      amount: event.target.value,

    });
  };

  const handlePeriodChange = (event) => {
    setLoan({
      ...loan,
      period: event.target.value,
    });
  };

  return (
    <div className="loan-params">
      <React.Fragment>
        <h1>Cash Loan Application</h1>
        <p>Please choose your loan parameters: </p>
      </React.Fragment>

      <form className="ui form">
        <div className="fields">
          <div className="field">
            <input
              onChange={handleAmountChange}
              onMouseUp={calculateLoanParams}
              onTouchEnd={calculateLoanParams}
              type="range"
              min="1000"
              max="108000"
              name="loan-amount"
              step="100"
              value={loan.amount}
              placeholder="Amount between 1000 PLN and 108 000 PLN"
            ></input>
            <input
              onChange={handleAmountChange}
              onBlur={calculateLoanParams}
              type="number"
              min="1000"
              max="108000"
              name="loan-amount"
              value={loan.amount}
              placeholder="Amount between 1000 PLN and 108 000 PLN"
            ></input>
          </div>
          <div className="field">
            <input
              onChange={handlePeriodChange}
              onMouseUp={calculateLoanParams}
              onTouchEnd={calculateLoanParams}
              type="range"
              min="6"
              max="120"
              step="1"
              name="loan-period"
              value={loan.period}
              placeholder="Period between 6 and 120 months"
            ></input>
            <input
              onChange={handlePeriodChange}
              onBlur={calculateLoanParams}
              type="number"
              min="6"
              max="120"
              name="loan-period"
              value={loan.period}
              placeholder="Period between 6 and 120 months"
            ></input>
          </div>
        </div>

        <section>
          <h3> Your Loan Parameters : </h3>
          <p>Amount: {loan.amount} </p>
          <p>Period: {loan.period} </p>
          <p>Interest Rate: {loan.interestRate}% </p>
          <p>Interest: {loan.interest} </p>
          <p>Installment: {loan.installment} </p>
          <p>Annual Percantage Rate:{loan.apr} % </p>
          <p>Total Pay Off Amount: {loan.totalPayOff} </p>
        </section>
      </form>
      <Link to="/clientinfo">
        <button className="ui button">Next</button>
      </Link>
    </div>
  );
}
