import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import App from './components/App.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
