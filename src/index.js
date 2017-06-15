import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Home from './routes/Home';
import ProductDetail from './routes/ProductDetail';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='search' component={Home} />
        <Route path='item' component={ProductDetail} />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
