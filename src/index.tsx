import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/tailwind.css';
import App from './App';
import data from './fake-data/data';

ReactDOM.render(
  <React.StrictMode>
    <App data={data} test={false}/>
  </React.StrictMode>,
  document.getElementById('root'),
);
