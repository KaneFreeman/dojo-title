import { create, tsx } from '@dojo/framework/core/vdom';
import title from '@dojo/framework/core/middleware/title';

const factory = create({ title });

export default factory(function Dynamic({ middleware: { title } }) {
	return (
		<virtual>
			<h1>Dynamic</h1>
			<button type="button" onclick={() => title.set('Dynamic Title - Title A')}>Title A</button>
			<button type="button" onclick={() => title.set('Dynamic Title - Title B')}>Title B</button>
		</virtual>
	);
});
