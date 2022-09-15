import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/App';

import './style/style.scss';

const rootElem = document.getElementById('root');
if (rootElem) {
	const root = ReactDOM.createRoot(rootElem);
	root.render(<App />);
}
