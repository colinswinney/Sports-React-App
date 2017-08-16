import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

var dataURL = 'http://local.sports.dev';

ReactDOM.render(<App dataURL={dataURL} />, document.getElementById('root'));
registerServiceWorker();
