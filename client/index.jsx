import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/Calendar.jsx';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import style from './css/style.css'
ReactDOM.render(<Calendar day="0"/>, document.getElementById('root'));