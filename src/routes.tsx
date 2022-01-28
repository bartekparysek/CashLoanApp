import ClientInfo from './pages/ClientInfo';
import Finish from './pages/Finish';
import Invitation from './pages/Invitation';
import LoanParams from './pages/LoanParams';

export interface Route {
	path: string;
	name: string;
	exact: boolean;
	component: any;
	props?: any;
}
const routes: Route[] = [
	{
		path: '/',
		name: 'Home Page',
		component: Invitation,
		exact: true,
	},
	{
		path: '/loanparams',
		name: 'Loan Parameters',
		component: LoanParams,
		exact: true,
	},
	{
		path: '/clientinfo',
		name: 'Client Information',
		component: ClientInfo,
		exact: true,
	},
	{
		path: '/finish',
		name: 'Summary',
		component: Finish,
		exact: true,
	},
];

export default routes;
