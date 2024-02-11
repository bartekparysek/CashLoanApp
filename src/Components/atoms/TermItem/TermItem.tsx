import { FC } from 'react';
import { TermItemProps } from './TermItem.types';
import { cn } from '@/helpers/cn';

export const TermItem: FC<TermItemProps> = ({
  className,
  value,
  description,
  smallValue,
}) => (
  <li
    className={cn(
      'flex bg-iron-50 w-full p-2 flex-col text-center sm:items-center rounded justify-center',
      className
    )}
  >
    <p className="text-gray-200 mb-1 ">{description}</p>
    <p className="">
      <span className="text-xl mr-1">{value}</span>
      <small>{smallValue}</small>
    </p>
  </li>
);
