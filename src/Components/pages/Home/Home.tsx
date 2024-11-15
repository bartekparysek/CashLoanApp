import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import money from "@/assets/images/money.webp";
import { routes } from "@/routes";
import { Section } from "@/components/atoms/Section";
import Link from "next/link";

export const Home = () => (
  <Section className="flex w-full flex-col items-center gap-8 lg:justify-between lg:gap-5 xl:flex-row">
    <Image
      width={500}
      height={700}
      className="mb-5 w-full rounded lg:mb-0"
      alt="money"
      src={money}
    />

    <div className="flex w-full flex-col items-center justify-around text-center">
      <div className="mb-8 flex flex-col">
        <h2 className="mb-8 font-playfair text-3xl text-gray-100 lg:text-5xl">
          Cash Loan <strong>(APR 7,33%)</strong>
        </h2>
        <p className="text-base text-gray-300">
          Borrow up to <strong>108 000 PLN</strong> interest only <strong>7.2%</strong> <br />
          Free lending commission and early repayment
        </p>
      </div>

      <Link
        href={routes.loan()}
        shallow
      >
        <Button
          color="yippie"
          className="lg:justify-self-start"
          size="large"
        >
          Start
        </Button>
      </Link>
    </div>
  </Section>
);
