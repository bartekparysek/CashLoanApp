import { MdCheckCircle } from 'react-icons/md';
import { Button } from '@/components/atoms/Button';
import { routes } from '@/routes';
import { Section } from '@/components/atoms/Section';

export default function Finish() {
  return (
    <Section className="flex py-10 h-full justify-center">
      <div className="flex flex-col ">
        {/* TODO: animate this svg */}
        <MdCheckCircle className="text-[#27ae60] w-16 h-16" />
        <h3 className="text-gray-200  my-4">
          Your applicacation has been submited succesfully!
        </h3>

        <Button as="a" href={routes.home()}>
          Start Again!
        </Button>
      </div>
    </Section>
  );
}
