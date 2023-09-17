import Logo from '/public/icons/Logo.svg';
import React from 'react';

export const Header = () => {
  return (
    <div className="sticky bg-white border-b border-solid border-neutral-200 flex items-center w-full inset-0 mb-5 px-5 lg:px-20 py-2.5">
      <Logo className="w-10 h-10" />
      <h1 className="ml-4 text-gray-100 font-thin text-4xl italic">
        Cash Loan
      </h1>
      {/* Add Light/Dark mode switch */}
    </div>
  );
};
