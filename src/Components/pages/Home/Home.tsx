import Image from 'next/image';
import { Button } from '@/components/atoms/Button';
import money from '/public/images/money.webp';
import { routes } from '@/routes';
import { Section } from '@/components/atoms/Section';
import Link from 'next/link';

export const Home = () => (
  <Section className="w-full flex items-center gap-8 flex-col xl:flex-row lg:gap-5 lg:justify-between">
    <Image
      width={500}
      height={700}
      className="mb-5 w-full rounded lg:mb-0"
      alt="money"
      src={money}
    />

    <div className="flex flex-col justify-around w-full items-center text-center">
      <div className="flex flex-col mb-8">
        <h2 className="text-3xl lg:text-5xl mb-8 text-gray-100 font-playfair">
          Cash Loan <strong>(APR 7,33%)</strong>
        </h2>
        <p className="text-gray-300 text-base">
          Borrow up to <strong>108 000 PLN</strong> interest only{' '}
          <strong>7.2%</strong> <br />
          Free lending commission and early repayment
        </p>
      </div>

      <Link href={routes.loan()} shallow>
        <Button color="yippie" className="lg:justify-self-start" size="large">
          Start
        </Button>
      </Link>
    </div>
  </Section>
);
