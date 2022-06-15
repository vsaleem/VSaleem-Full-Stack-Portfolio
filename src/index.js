//@ts-check
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './assets/js/main';
import './assets/js/util'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDom.render(
    <React.StrictMode>
           <App />,
    </React.StrictMode>,
    document.getElementById('root')
);