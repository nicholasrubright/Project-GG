import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';

// Sections
import Main from './sections/Main';

ReactDOM.render(
    <div>
       <Main /> 
    </div>,
    document.getElementById('root')
);