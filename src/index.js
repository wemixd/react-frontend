import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css'
import CreatePlaylist from './components/pages/CreatePlaylist';
import dotenv from 'dotenv'
import * as serviceWorker from './config/serviceWorker';

dotenv.config();
ReactDOM.render(<CreatePlaylist />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
