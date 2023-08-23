import TextInput from '../atoms/TextInput';
import { onInputChangeEvent } from '../organisms/ClientInfo';

interface InputsProps {
  handleFirstNameChange: (event: onInputChangeEvent) => void;
  handleLastNameChange: (event: onInputChangeEvent) => void;
  handleEmailChange: (event: onInputChangeEvent) => void;
  handleAddressChange: (event: onInputChangeEvent) => void;
  values: {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
  };
  submitted: boolean;
}

const InformationInputs = ({
  handleFirstNameChange,
  handleLastNameChange,
  handleEmailChange,
  handleAddressChange,
  values,
  submitted,
}: InputsProps): JSX.Element => {
  return (
    <div className="py-5 max-w-lg flex flex-col justify-around min-h-[30vh]">
      <TextInput
        onChange={handleFirstNameChange}
        placeholder="First Name"
        value={values.firstName}
        submitted={submitted}
        errorMessage="Please enter your first name"
        required={true}
      />
      <TextInput
        onChange={handleLastNameChange}
        placeholder="Last Name"
        value={values.lastName}
        submitted={submitted}
        errorMessage="Please enter your last name"
        required={true}
      />
      <TextInput
        onChange={handleEmailChange}
        placeholder="E-mail"
        value={values.email}
        submitted={submitted}
        errorMessage="Please enter valid e-mail"
        type="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        required={true}
      />
      <TextInput
        onChange={handleAddressChange}
        placeholder="Address"
        value={values.address}
        submitted={submitted}
        errorMessage="Please enter your address"
        required={true}
      />
    </div>
  );
};

export default InformationInputs;
