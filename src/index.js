import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

var dataURL = 'http://sports.colinswinney.com/';

ReactDOM.render(<App dataURL={dataURL} />, document.getElementById('root'));
registerServiceWorker();
