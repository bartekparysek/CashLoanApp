import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoanParams from './pages/LoanParams';
import ClientInfo from './pages/ClientInfo';
import Invitation from './pages/Invitation';
import Finish from './pages/Finish';
import Header from './Components/organisms/Header';
import './tailwind.css';
import BreadCrumbs from './Components/atoms/BreadCrumbs';

export default function App() {
	return (
		<Router>
			<div className='px-12'>
				<Header />
				<BreadCrumbs />
				<div className='bg-blue rounded p-9 mt-4 min-h-3/4 shadow-md flex  items-center'>
					<Switch>
						<Route path='/' exact component={Invitation} />
						<Route path='/loanparams' component={LoanParams} />
						<Route path='/clientinfo' component={ClientInfo} />
						<Route path='/finish' component={Finish} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}
