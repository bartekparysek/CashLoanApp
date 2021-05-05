import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ClientInfo() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFirstNameChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      firstName: event.target.value
    }));
  };

  const handleLastNameChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value
    }));
  };

  const handleEmailChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value
    }));
  };

  const handleAddressChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      address: event.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="client-info">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <input
            onChange={handleFirstNameChange}
            type="text"
            name="first-name"
            placeholder="First Name"
            value={values.firstName}
          />
          {submitted && !values.firstName && <span id="first-name-error">Please enter your first name</span>}
        </div>

        <div className="field">
          <input
            onChange={handleLastNameChange}
            type="text"
            name="first-name"
            placeholder="Last Name"
            value={values.lastName}
          />
          {submitted && !values.lastName && <span id="last-name-error">Please enter your last name</span>}
        </div>

        <div className="field">
          <input
            onChange={handleEmailChange}
            type="text"
            name="first-name"
            placeholder="E-mail"
            value={values.email}
            pattern="(\w\.?)+@[\w\.-]+\.\w{2,4}"
          />
          {submitted && !values.email && <span id="email-error">Please enter an email address</span>}
        </div>

        <div className="field">
          <input
            onChange={handleAddressChange}
            type="text"
            name="first-name"
            placeholder="Address"
            value={values.address}
          />
          {!values.address && submitted && <span id="address-error">Please enter an address </span>}
        </div>
      </form>
      <div>
        <Link to="/finish" >
          <button onClick={handleSubmit} >Submit</button>
        </Link>
      </div>

    </div>
  );
}
