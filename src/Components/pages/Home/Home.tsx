import Image from 'next/image';
import NavButton from '@/components/atoms/NavButton';
import money from '/public/images/money.webp';

export const Home = () => {
  return (
    <div className="flex justify-between bg-white rounded ">
      <div className="flex flex-col p-10 justify-around">
        <div className="leading-9 flex flex-col content-between">
          <h2 className="font-bold text-2xl mb-5">Cash Loan (APR 7,33%)</h2>
          <ul className="text-black opacity-30 font-bold list-disc list-inside">
            <li>borrow up to 108 000 PLN</li>
            <li>interest only 7.2%</li>
            <li>free lending commision </li>
            <li>free early repayment</li>
          </ul>
        </div>

        <NavButton path="/loanparams" nextPage="Loan Parameters" />
      </div>
      <Image
        className="w-auto h-[60vh] rounded-r-sm"
        alt="money"
        src={money}
      ></Image>
    </div>
  );
};
