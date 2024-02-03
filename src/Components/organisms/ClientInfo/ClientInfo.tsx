import Image from 'next/image';
import form from 'public/images/form.webp';
import { ClientInfoForm } from './components/ClientInfoForm/ClientInfoForm';
import { Section } from '@/components/atoms/Section';
import { SectionHeader } from '@/components/molecules/SectionHeader';

export const ClientInfo = () => {
  return (
    <Section>
      <SectionHeader title="Your personal information" />
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
