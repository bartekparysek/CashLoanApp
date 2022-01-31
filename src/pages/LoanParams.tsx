import React, { useState, useEffect } from 'react';
import NavButton from '../Components/atoms/NavButton';
import { onInputChangeEvent } from '../Components/atoms/TextInput';
import LoanTerms from '../Components/molecules/LoanTerms';
import Parameters from '../Components/organisms/Parameters';

export type nullNumberUnion = null | number;

export interface loanParams {
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
	useEffect(() => {
		calculateLoanParams();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const calculateLoanParams = () => {
		const loanPeriodDays = Math.round(loan.period * 30.41666);
		const totalInterest = parseFloat(
			(
				((loan.amount * parseFloat((loan.interestRate / 100).toFixed(3))) /
					365) *
				loanPeriodDays
			).toFixed(2)
		);
		const totalPayOff = parseFloat((loan.amount + totalInterest).toFixed(2));
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
		<div className='bg-white rounded min-h-[60vh] min-w-[70vw] px-10'>
			<form>
				<Parameters
					handleAmountChange={handleAmountChange}
					handlePeriodChange={handlePeriodChange}
					calculateLoanParams={calculateLoanParams}
					loan={loan}
				/>
			</form>
			<LoanTerms loan={loan} />
			<NavButton path='/clientinfo' nextPage='Client information' />
		</div>
	);
}
