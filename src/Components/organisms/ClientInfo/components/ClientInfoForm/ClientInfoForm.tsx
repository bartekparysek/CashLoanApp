import React from 'react';
import { useForm } from 'react-hook-form';
import { TextInput } from '@/components/atoms/TextInput';
import { ClientInfoValues } from './ClientInfoForm.types';
import { Button } from '@/components/atoms/Button';
import { isValidEmail } from '@/helpers/regex';
import { nextStepAtom } from '@/store/loanStep';
import { useAtom, useSetAtom } from 'jotai';
import { clientInfoAtom } from '@/store/clientInfo';

export const ClientInfoForm = () => {
  const [_, setClientInfo] = useAtom(clientInfoAtom);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientInfoValues>({});
  const setNextAtom = useSetAtom(nextStepAtom);

  const onSubmit = (data: ClientInfoValues) => {
    setClientInfo(data);
    setNextAtom();
  };

  return (
    <div className=" w-full flex justify-center items-center">
      <form
        id="clientInfo"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex gap-6 flex-col items-center max-w-[450px] justify-center min-h-[30vh] "
      >
        <TextInput
          {...register('firstName', {
            required: 'Please enter your first name',
          })}
          placeholder="First Name"
          error={errors?.firstName?.message}
        />
        <TextInput
          {...register('lastName', { required: 'Please enter your last name' })}
          placeholder="Last Name"
          error={errors?.lastName?.message}
        />
        <TextInput
          {...register('email', {
            required: 'Please enter your e-mail',
            validate: {
              isValid: (value) =>
                isValidEmail(value) ? true : 'Please enter valid e-mail',
            },
          })}
          placeholder="E-mail"
          type="email"
          error={errors?.email?.message}
        />
        <TextInput
          {...register('address', { required: 'Please enter your address' })}
          placeholder="Address"
          error={errors?.address?.message}
        />
        <Button
          type="submit"
          color="yippie"
          className=" font-normal  mt-8"
          size="large"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
