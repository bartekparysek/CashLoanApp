import { FC, PropsWithChildren } from 'react';

export const ParamsInput: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex items-end mb-2 ">{children}</div>
);
