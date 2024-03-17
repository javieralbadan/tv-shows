import { copy } from 'fs-extra';

copy('dist/index.html', 'dist/404.html')
	.then(() => console.log('NotFound error page created successfully'))
	.catch((error) => console.error(error));
