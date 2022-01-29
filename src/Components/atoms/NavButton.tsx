import { Link } from 'react-router-dom';

interface Button {
	path: string;
	nextPage: string;
}

const NavButton = ({ path, nextPage }: Button): JSX.Element => {
	return (
		<div className='inline-block py-2 px-3 text-center whitespace-nowrap max-w-fit text-white rounded bg-blue1 mb-4'>
			<Link to={path}>
				<button>{nextPage}</button>
			</Link>
		</div>
	);
};

export default NavButton;
