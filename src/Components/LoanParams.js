import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function LoanParams() {
  const [loan, setLoan] = useState({
    amount: 1000,
    period: 6,
    installment: null,
    interestRate: 7.2,
    interest: null,
    rir: null,
    totalPayOff: null
  });

  const calculateLoanParams = () => {
    const loanPeriodDays = Math.round(loan.period * 30.436875);
    console.log(loanPeriodDays);
    const totalInterest =
      ((loan.amount * parseFloat((loan.interestRate / 100).toFixed(3))) / 365) *
      (loan.period * 30.436875);
    const apr =
      (totalInterest / loan.amount / (loan.period * 30.436875)) * 365 * 100;
    const rir = (1 + apr) / (1 + 3.2) - 1;
    const totalPayOff = parseInt(loan.amount + loan.interest);
    return {
      totalInterest,
      rir,
      totalPayOff
    };
  };

  // make a function which will return an object with these values
  // guess : the scope of this function does not allow for a proper execution of this variables
  // RRSO - use some official formula for this eg. https://www.telepolis.pl/fintech/poradniki/rrso-czym-jest-wzor-chwilowka-kredyt
  // use ref instead of props or state
  // parseInt is not working correctly

  const handleAmountChange = (event) => {
    const { totalInterest, rir, totalPayOff } = calculateLoanParams();
    setLoan({
      ...loan,
      amount: event.target.value,
      interest: Math.round(totalInterest * 100) / 100,
      rir: rir,
      totalPayOff: totalPayOff
    });
  };

  const handlePeriodChange = (event) => {
    const { totalInterest, rir, totalPayOff } = calculateLoanParams();
    setLoan({
      ...loan,
      period: event.target.value,
      interest: Math.round(totalInterest * 100) / 100,
      rir: rir,
      totalPayOff: totalPayOff
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
          <p>InterestRate: {loan.interestRate}% </p>
          <p>Interest: {loan.interest} </p>
          <p>Installment: {loan.installment} </p>
          <p>Real Interest Rate:{loan.rir} </p>
          <p>Total Pay Off Amount:{loan.totalPayOff} </p>
        </section>
      </form>
      <Link to="/clientinfo">
        <button className="ui button">Next</button>
      </Link>
    </div>
  );
}
