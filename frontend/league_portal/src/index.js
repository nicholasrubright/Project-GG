import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
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