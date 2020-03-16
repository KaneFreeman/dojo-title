import { create, tsx } from '@dojo/framework/core/vdom';

const factory = create();

export default factory(function Static() {
	return (
		<h1>Static Page</h1>
	);
});
