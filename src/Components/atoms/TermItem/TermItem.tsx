import { FC } from 'react';
import { TermItemProps } from './TermItem.types';

export const TermItem: FC<TermItemProps> = ({
  value,
  description,
  smallValue,
}) => (
  <li className="flex flex-col sm:items-center last:col-start-3 last:row-start-2">
    <p className="text-gray-200 font-bold mb-2 ">{description}</p>
    <p className="text-blue font-bold">
      <span className="text-3xl mr-1">{value}</span>
      <small>{smallValue}</small>
    </p>
  </li>
);
