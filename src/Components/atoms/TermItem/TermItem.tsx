import { FC } from 'react';
import { TermItemProps } from './TermItem.types';

export const TermItem: FC<TermItemProps> = ({
  value,
  description,
  smallValue,
}) => (
  <li className="flex flex-col text-center sm:items-center lg:last:col-start-3 lg:last:row-start-2">
    <p className="text-gray-300 mb-1 ">{description}</p>
    <p className="text-green-800">
      <span className="text-2xl mr-1">{value}</span>
      <small>{smallValue}</small>
    </p>
  </li>
);
