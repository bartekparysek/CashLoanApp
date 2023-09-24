import { Button } from '@/components/atoms/Button';
import Image from 'next/image';
import money from '/public/images/money.webp';
import { routes } from '@/routes';

export const Home = () => {
  return (
    <section className="w-full gap-5  bg-opacity-60 p-5 flex items-center flex-col lg:flex-row justify-between bg-white rounded border border-neutral-200 border-solid ">
      <Image
        width={500}
        height={700}
        className="mb-5 w-full rounded lg:mb-0 "
        alt="money"
        src={money}
      />

      <div className="flex flex-col justify-around w-full lg:items-center ">
        <div className="flex flex-col mb-5">
          <h2 className="text-4xl mb-5 text-gray-100">
            Cash Loan <strong>(APR 7,33%)</strong>
          </h2>
          <p className="text-gray-300 text-base">
            Borrow up to <strong>108 000 PLN</strong> interest only{' '}
            <strong>7.2%</strong> <br />
            Free lending commision and early repayment
          </p>
        </div>

        <Button
          color="yippie"
          className="lg:justify-self-start font-medium"
          as="a"
          href={routes.loan()}
        >
          Fill Loan Application
        </Button>
      </div>
    </section>
  );
};
