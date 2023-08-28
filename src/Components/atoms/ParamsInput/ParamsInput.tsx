import { FC, PropsWithChildren } from 'react';

export const ParamsInput: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex items-end mb-2 ">{children}</div>;
};
