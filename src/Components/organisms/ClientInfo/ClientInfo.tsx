import Image from 'next/image';
import form from 'public/images/form.webp';
import { FC } from 'react';
import { ClientInfoForm } from './components/ClientInfoForm/ClientInfoForm';
import { Section } from '@/components/atoms/Section';
import { useLoanApplication } from '@/contexts/LoanAppContext';
import { BackButton } from '@/components/atoms/BackButton';
import { StepProps } from '@/components/pages/LoanApplication/LaonAppStepRenderer';

export const ClientInfo: FC<StepProps> = ({ key }) => {
  const { setPrevStep } = useLoanApplication();

  return (
    <Section key={key}>
      <BackButton onClick={setPrevStep} />
      <h2 className="mb-5 text-xl text-center text-gray-100">
        Your personal information
      </h2>
      <div className="w-full flex flex-col items-center gap-5 lg:flex-row">
        <Image
          width={500}
          height={700}
          className="w-full h-full lg:max-w-[500px] xl:max-w-[700px] rounded"
          alt="money"
          src={form}
        />
        <ClientInfoForm />
      </div>
    </Section>
  );
};
