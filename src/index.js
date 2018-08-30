import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

WebFont.load({
  google: {
    families: ['Josefin Sans:400,600']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
