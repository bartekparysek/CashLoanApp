import Link from 'next/link';
// eslint-disable-next-line import/no-absolute-path
import Logo from '/public/icons/Logo.svg';
import React from 'react';
import { routes } from '@/routes';

export const Header = () => (
  <div className="sticky bg-white border-b border-solid border-neutral-200 flex items-center w-full inset-0 mb-5 px-5 lg:px-20 py-2.5">
    <Link className="flex" href={routes.home()}>
      <Logo className="w-10 h-10" />
      <h1 className="ml-4 text-gray-100 font-playfair font-normal text-3xl">
        Cash Loan
      </h1>
    </Link>
    {/* Add Light/Dark mode switch */}
  </div>
);
