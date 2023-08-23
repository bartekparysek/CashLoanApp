import React, { ChangeEvent, FormEvent, useState } from 'react';

import InformationInputs from '../molecules/InformationInputs';
import NavButton from '../atoms/NavButton';
import form from 'assets/form.webp';
import { useInfo } from '../../contexts/LoanAppContext';

export type onInputChangeEvent = ChangeEvent & { target: HTMLInputElement };

export default function ClientInfo() {
  const [submitted, setSubmitted] = useState(false);
  const { loan, clientInfo: values, setClientInfo: setValues } = useInfo();

  const handleFirstNameChange = (event: onInputChangeEvent) => {
    event.persist();
    setValues((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  };

  const handleLastNameChange = (event: onInputChangeEvent) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };

  const handleEmailChange = (event: onInputChangeEvent) => {
    event.persist();
    console.log(event.target.validity.patternMismatch);
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handleAddressChange = (event: onInputChangeEvent) => {
    event.persist();
    setValues((values) => ({
      ...values,
      address: event.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const applicationSummary = Object.assign(loan, values);
    const isNulllish = Object.values(applicationSummary).every((value) =>
      value !== null ? true : false
    );
    if (isNulllish) {
      console.log(applicationSummary);
    }
    setSubmitted(true);
  };
  return (
    <div className="bg-white rounded min-h-[60vh] min-w-[70vw]  flex justify-between">
      <div className="p-10">
        <h2 className="font-bold text-2xl">Your personal information</h2>
        <form id="clientInfo" onSubmit={handleSubmit}>
          <InformationInputs
            handleFirstNameChange={handleFirstNameChange}
            handleLastNameChange={handleLastNameChange}
            handleEmailChange={handleEmailChange}
            handleAddressChange={handleAddressChange}
            values={values}
            submitted={submitted}
          />
        </form>

        <NavButton path="/finish" nextPage="Submit" onClick={handleSubmit} />
      </div>
      {/* <img
				className='w-auto max-h-[60vh] rounded-r-sm'
				alt='money'
				src={form}
			></img> */}
    </div>
  );
}
