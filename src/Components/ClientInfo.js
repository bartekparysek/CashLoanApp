import React, { useState } from "react";

export default function ClientInfo() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: ""
  });

  const handleFirstNameChange = (event) => {
    setValues((values) => ({
      ...values,
      firstName: event.target.value
    }));
  };

  const handleLastNameChange = (event) => {
    setValues((values) => ({
      ...values,
      lastName: event.target.value
    }));
  };

  const handleEmailChange = (event) => {
    setValues((values) => ({
      ...values,
      email: event.target.value
    }));
  };

  const handleAddressChange = (event) => {
    setValues((values) => ({
      ...values,
      address: event.target.value
    }));
  };

  return (
    <div className="credit-app">
      <form className="ui form">
        <div className="field">
          <label>First Name</label>
          <input
            onChange={handleFirstNameChange}
            type="text"
            name="first-name"
            placeholder="First Name"
            value={values.firstName}
          />
        </div>

        <div className="field">
          <label>Last Name</label>
          <input
            onChange={handleLastNameChange}
            type="text"
            name="first-name"
            placeholder="Last Name"
            value={values.lastName}
          />
        </div>

        <div className="field">
          <label>E-mail</label>
          <input
            onChange={handleEmailChange}
            type="text"
            name="first-name"
            placeholder="E-mail"
            value={values.email}
          />
        </div>

        <div className="field">
          <label>Address</label>
          <input
            onChange={handleAddressChange}
            type="text"
            name="first-name"
            placeholder="Address"
            value={values.address}
          />
        </div>
      </form>
    </div>

    // submit button
    // modal with success message
  );
}
