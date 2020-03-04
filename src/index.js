import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App a1="5" a2="10"/>, document.getElementById('root'));
serviceWorker.unregister();
