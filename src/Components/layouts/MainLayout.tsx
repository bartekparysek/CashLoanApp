import { FC, PropsWithChildren } from 'react';

import BreadCrumbs from '../atoms/BreadCrumbs/BreadCrumbs';
import { Header } from '../molecules/Header';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full h-full pb-20 ">
      <Header />
      {/* <BreadCrumbs /> */}
      <div className="w-full h-full flex items-center px-5 md:px-20">
        {children}
      </div>
    </div>
  );
};
