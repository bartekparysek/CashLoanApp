import Link from "next/link";
import Logo from "@/assets/icons/Logo.svg";
import React from "react";
import { routes } from "@/routes";

export const Header = () => (
  <div className="sticky inset-0 mb-5 flex w-full items-center border-b border-solid border-neutral-200 bg-white px-5 py-2.5 lg:px-20">
    <Link
      className="flex"
      href={routes.home()}
    >
      <Logo className="h-10 w-10" />
      <h1 className="ml-4 font-playfair text-3xl font-normal text-gray-100">Cash Loan</h1>
    </Link>
    {/* Add Light/Dark mode switch */}
  </div>
);
