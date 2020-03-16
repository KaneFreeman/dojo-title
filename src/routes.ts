import { RouteConfig } from '@dojo/framework/routing/interfaces';

export const routes: RouteConfig[] = [
	{
		path: '/',
		outlet: 'static',
		defaultRoute: true
	},
	{
		path: '/dynamic',
		outlet: 'dynamic'
	},
	{
		path: '/parameterized/{param}',
		outlet: 'parameterized'
	}
];

export default routes;
