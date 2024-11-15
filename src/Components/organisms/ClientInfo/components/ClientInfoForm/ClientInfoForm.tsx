import React from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "@/components/atoms/TextInput";
import { ClientInfoValues } from "./ClientInfoForm.types";
import { Button } from "@/components/atoms/Button";
import { isValidEmail } from "@/helpers/regex";
import { nextStepAtom } from "@/stores/loanStep";
import { useAtom, useSetAtom, useAtomValue } from "jotai";
import { clientInfoAtom } from "@/stores/clientInfo";

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
    <div className="flex w-full items-center justify-center">
      <form
        id="clientInfo"
        onSubmit={handleSubmit(onSubmit)}
        className="flex min-h-[30vh] w-full max-w-[450px] flex-col items-center justify-center gap-6"
      >
        <TextInput
          {...register("firstName", {
            required: "Please enter your first name",
          })}
          placeholder="First Name"
          error={errors?.firstName?.message}
        />
        <TextInput
          {...register("lastName", { required: "Please enter your last name" })}
          placeholder="Last Name"
          error={errors?.lastName?.message}
        />
        <TextInput
          {...register("email", {
            required: "Please enter your e-mail",
            validate: {
              isValid: (value) => (isValidEmail(value) ? true : "Please enter valid e-mail"),
            },
          })}
          placeholder="E-mail"
          type="email"
          error={errors?.email?.message}
        />
        <TextInput
          {...register("address", { required: "Please enter your address" })}
          placeholder="Address"
          error={errors?.address?.message}
        />
        <Button
          type="submit"
          color="yippie"
          className="mt-8 font-normal"
          size="large"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
