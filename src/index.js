import React from 'react';
import ReactDOM from 'react-dom';
import Dragula from 'react-dragula';
import App from './App';
import DragDrop from './DragDrop'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<DragDrop />, document.getElementById('dragula'));
registerServiceWorker();
