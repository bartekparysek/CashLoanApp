import { FormEvent } from 'react';

interface Button {
  path: string;
  nextPage: string;
  onClick?: (e: FormEvent) => void;
}

const NavButton = ({ path, nextPage, onClick }: Button): JSX.Element => {
  return (
    <div className="inline-block py-2 px-3 text-center whitespace-nowrap max-w-fit text-white rounded bg-blue1 mb-4">
      {/* <Link to={path}>
				<button onClick={onClick}>{nextPage}</button>
			</Link> */}
    </div>
  );
};

export default NavButton;
