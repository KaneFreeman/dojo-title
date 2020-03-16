import { tsx, renderer } from '@dojo/framework/core/vdom';
import { Registry } from '@dojo/framework/core/Registry';
import { registerRouterInjector } from '@dojo/framework/routing/RouterInjector';

import config from './routes';

import App from './App';

const registry = new Registry();
registerRouterInjector(config, registry);

const r = renderer(() => <App />);
r.mount({ registry });
