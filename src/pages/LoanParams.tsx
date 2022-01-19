import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { onInputChangeEvent } from '../Components/atoms/Input';

type nullNumberUnion = null | number;

interface loanParams {
	amount: number;
	period: number;
	installment: nullNumberUnion;
	interestRate: number;
	interest: nullNumberUnion;
	apr: nullNumberUnion;
	totalPayOff: nullNumberUnion;
}

export default function LoanParams() {
	const [loan, setLoan] = useState<loanParams>({
		amount: 1000,
		period: 6,
		installment: null,
		interestRate: 7.2,
		interest: null,
		apr: null,
		totalPayOff: null,
	});

	const calculateLoanParams = () => {
		const loanPeriodDays = Math.round(loan.period * 30.41666);
		const totalInterest = parseFloat(
			(
				((loan.amount * parseFloat((loan.interestRate / 100).toFixed(3))) /
					365) *
				loanPeriodDays
			).toFixed(2)
		);
		const totalPayOff = loan.amount + totalInterest;
		const installment = parseFloat((totalPayOff / loan.period).toFixed(2));
		const apr = parseFloat(
			(
				((totalPayOff / loan.amount) ** (365 / loanPeriodDays) - 1) *
				100
			).toFixed(2)
		);

		setLoan({
			...loan,
			interest: totalInterest,
			totalPayOff,
			installment,
			apr,
		});
	};

	const handleAmountChange = (event: onInputChangeEvent) => {
		setLoan({
			...loan,
			amount: parseInt(event.target.value),
		});
	};

	const handlePeriodChange = (event: onInputChangeEvent) => {
		setLoan({
			...loan,
			period: parseInt(event.target.value),
		});
	};

	return (
		<div className='loan-params'>
			<React.Fragment>
				<p>Please choose your loan parameters: </p>
			</React.Fragment>

			<form className='ui form'>
				<div className='fields'>
					<div className='field'>
						<input
							onChange={handleAmountChange}
							onMouseUp={calculateLoanParams}
							onTouchEnd={calculateLoanParams}
							type='range'
							min='1000'
							max='108000'
							name='loan-amount'
							step='100'
							value={loan.amount}
							placeholder='Amount between 1000 PLN and 108 000 PLN'
						></input>
						<input
							onChange={handleAmountChange}
							onBlur={calculateLoanParams}
							type='number'
							min='1000'
							max='108000'
							name='loan-amount'
							value={loan.amount}
							placeholder='Amount between 1000 PLN and 108 000 PLN'
						></input>
					</div>
					<div className='field'>
						<input
							onChange={handlePeriodChange}
							onMouseUp={calculateLoanParams}
							onTouchEnd={calculateLoanParams}
							type='range'
							min='6'
							max='120'
							step='1'
							name='loan-period'
							value={loan.period}
							placeholder='Period between 6 and 120 months'
						></input>
						<input
							onChange={handlePeriodChange}
							onBlur={calculateLoanParams}
							type='number'
							min='6'
							max='120'
							name='loan-period'
							value={loan.period}
							placeholder='Period between 6 and 120 months'
						></input>
					</div>
				</div>

				<h3> Your Loan Terms : </h3>
				<div className='loan-terms'>
					<ul>
						<li>Amount: {loan.amount} PLN</li>
						<li>Period: {loan.period} months </li>
						<li>Interest Rate: {loan.interestRate}% </li>
						<li>Interest: {loan.interest} PLN</li>
						<li>Installment: {loan.installment} PLN </li>
						<li>Annual Percantage Rate: {loan.apr} % </li>
						<li>Total Pay Off Amount: {loan.totalPayOff} PLN </li>
					</ul>
				</div>
			</form>
			<div>
				<Link to='/clientinfo'>
					<button className='ui button'>Next</button>
				</Link>
			</div>
		</div>
	);
}
