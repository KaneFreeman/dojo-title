import { tsx, renderer, create } from '@dojo/framework/core/vdom';
import Outlet from '@dojo/framework/routing/Outlet';
import Link from '@dojo/framework/routing/Link';
import { Registry } from '@dojo/framework/core/Registry';
import { registerRouterInjector } from '@dojo/framework/routing/RouterInjector';

import config from './routes';

import Static from './Static';
import Parameterized from './Parameterized';
import Dynamic from './Dynamic';

const registry = new Registry();
registerRouterInjector(config, registry);

const factory = create();

const App = factory(function App() {
	return (
		<virtual>
			<div class="links">
				<Link to="static">Static</Link>
				<Link to="parameterized" params={{ param: 'ParamA' }}>Parameterized - Param A</Link>
				<Link to="parameterized" params={{ param: 'ParamB' }}>Parameterized - Param B</Link>
				<Link to="dynamic">Dynamic</Link>
			</div>
			<div>
				<Outlet id="static" title="Static Title" renderer={() => <Static />} />
				<Outlet id="parameterized" title={({ params: { param } }) => `Parameterized Title - ${param}`} renderer={() => <Parameterized />} />
				<Outlet id="dynamic" title="Dynamic Title" renderer={() => <Dynamic />} />
			</div>
		</virtual>
	);
});

const r = renderer(() => <App />);
r.mount({ registry });
