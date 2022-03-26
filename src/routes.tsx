import ClientInfo from './pages/ClientInfo';
import Finish from './pages/Finish';
import Invitation from './pages/Invitation';
import LoanParams from './pages/LoanParams';
import type { RouteProps } from 'react-router-dom';

export const routesConfig = {
	home: (): string => '/',
	loanParams: (): string => '/loanparams',
	clientInfo: (): string => '/clientinfo',
	finish: (): string => '/finish',
};

export type AppRouteProps = {
	name: string;
	path: string;
} & RouteProps;

const routes: AppRouteProps[] = [
	{
		path: routesConfig.home(),
		name: 'Home Page',
		component: Invitation,
		exact: true,
	},
	{
		path: routesConfig.loanParams(),
		name: 'Loan Parameters',
		component: LoanParams,
		exact: true,
	},
	{
		path: routesConfig.clientInfo(),
		name: 'Client Information',
		component: ClientInfo,
		exact: true,
	},
	{
		path: routesConfig.finish(),
		name: 'Summary',
		component: Finish,
		exact: true,
	},
];

export default routes;
