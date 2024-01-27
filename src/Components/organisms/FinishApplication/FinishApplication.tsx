import { Button } from '@/components/atoms/Button';
import { routes } from '@/routes';
import { Section } from '@/components/atoms/Section';
import { AnimatedSuccessIcon } from '@/components/atoms/AnimatedSuccessIcon';
import Link from 'next/link';

export const FinishApplication = () => {
  return (
    <Section className="flex py-10 justify-center items-center">
      <div className="flex flex-col items-center">
        <AnimatedSuccessIcon className="w-20 h-20" />
        <h3 className="text-gray-200  my-4">
          Your application has been submitted successfully!
        </h3>

        <Link href={routes.home()} shallow passHref>
          <Button type="button">Start Again!</Button>
        </Link>
      </div>
    </Section>
  );
};
