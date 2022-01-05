import Carousel from '../src/Carousel';
import React from 'react';
import ReactDOM from 'react-dom';
import slides from './slides'

//import slides from './slides';
const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<Carousel slides={slides} />, document.getElementById('root'));