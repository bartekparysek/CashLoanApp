import { TermItemProps } from '.';

export const TermItem = ({ value, description, smallValue }: TermItemProps) => {
  return (
    <li className="flex flex-col items-center last:col-start-3 last:row-start-2">
      <p className="text-black opacity-40 font-bold mb-2 ">{description}</p>
      <p className="text-blue font-bold">
        <span className="text-3xl mr-1">{value}</span>
        <small>{smallValue}</small>
      </p>
    </li>
  );
};
