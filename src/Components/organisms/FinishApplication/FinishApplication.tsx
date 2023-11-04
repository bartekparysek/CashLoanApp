import { Button } from '@/components/atoms/Button';
import { routes } from '@/routes';
import { Section } from '@/components/atoms/Section';
import { AnimatedSuccessIcon } from '@/components/atoms/AnimatedSuccessIcon';

export const FinishApplication = () => (
  <Section className="flex py-10 h-full justify-center items-center">
    <div className="flex flex-col items-center">
      <AnimatedSuccessIcon className="w-20 h-20" />
      <h3 className="text-gray-200  my-4">
        Your application has been submitted successfully!
      </h3>

      <Button as="a" href={routes.home()}>
        Start Again!
      </Button>
    </div>
  </Section>
);
