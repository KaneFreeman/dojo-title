import { create, tsx } from '@dojo/framework/core/vdom';
import theme from '@dojo/framework/core/middleware/theme';
import Link from '@dojo/framework/routing/Link';
import Outlet from '@dojo/framework/routing/Outlet';

import Static from './Static';
import Dynamic from './Dynamic';
import Parameterized from './Parameterized';
import * as css from './App.m.css';

const factory = create({ theme });

export default factory(function App({ middleware: { theme } }) {
	const themedCss = theme.classes(css);
	return (
		<virtual>
			<div class="links">
				<Link classes={themedCss.link} to="static">Static</Link>
				<Link classes={themedCss.link} to="parameterized" params={{ param: 'ParamA' }}>Parameterized - Param A</Link>
				<Link classes={themedCss.link} to="parameterized" params={{ param: 'ParamB' }}>Parameterized - Param B</Link>
				<Link classes={themedCss.link} to="dynamic">Dynamic</Link>
			</div>
			<div>
				<Outlet id="static" title="Static Title" renderer={() => <Static />} />
				<Outlet id="parameterized" title={({ params: { param } }) => `Parameterized Title - ${param}`} renderer={() => <Parameterized />} />
				<Outlet id="dynamic" title="Dynamic Title" renderer={() => <Dynamic />} />
			</div>
		</virtual>
	);
});
