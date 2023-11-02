import React, { FC } from 'react';
import { ValuesListProps } from '.';

export const ValuesList: FC<ValuesListProps> = ({ values }) => (
  <ul className="w-full bg-neutral-100 rounded-lg p-5">
    {values.map((item, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <li key={i} className="flex justify-between mb-5">
        <div className="capitalize mr-2">{item.name.toLowerCase()}</div>
        <div className="truncate">{item.value}</div>
      </li>
    ))}
  </ul>
);
