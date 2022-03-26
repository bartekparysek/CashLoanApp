import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';
import routes from '../../routes';

const BreadCrumbs = () => {
	return (
		<nav className='bg-white py-2 px-4 rounded max-w-xl mt-2 shadow-sm'>
			<ol className='flex justify-around items-center '>
				{routes.map((route) => {
					return (
						<li className='flex items-center' key={route.name}>
							<Link to={route.path}>{route.name}</Link>
							{routes[routes.length - 1] === route ? null : (
								<span className='text-gray text-xl ml-3'>
									<MdArrowForwardIos />
								</span>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
};
export default BreadCrumbs;
