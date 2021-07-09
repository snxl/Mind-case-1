import React from 'react';
import ReactDOM from 'react-dom';

//components
import Router from './routes/router.js';

//global css
import './styles/global.css';

ReactDOM.render(

    <Router/>,

  document.querySelector("[data-root]")
);

