import React from 'react';
import { createRoot } from 'react-dom/client';

import { helloWorld } from '../modules/simple';

import './main.scss';
import './vendor.scss';

const Main = () => {
	helloWorld();

	return <div>Application loaded</div>;
};

const reactContainer = document.querySelector('#application-container');

if (reactContainer === null) {
	console.error('Unknown container selector!');
} else {
	const root = createRoot(reactContainer);

	root.render(<Main />);
}
