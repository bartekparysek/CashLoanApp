import { FC, PropsWithChildren } from 'react';

import BreadCrumbs from '../atoms/BreadCrumbs/BreadCrumbs';
import Header from '../molecules/Header/Header';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="px-12">
      <Header />
      <BreadCrumbs />
      <div className="bg-blue rounded p-9 mt-4 min-h-3/4 shadow-md flex  items-center">
        {children}
      </div>
    </div>
  );
};
