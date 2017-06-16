import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Home from './routes/Home';
import ListPage from './routes/ListPage';
import ProductDetail from './routes/ProductDetail';
import registerServiceWorker from './registerServiceWorker';
import './bootstrap/css/bootstrap.css';
import './App.scss';
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(

    <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='items' component={ListPage} />
        <Route path='items/:itemid' component={ProductDetail} />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();

//        <Route path='item/:id' component={ProductDetail} />
//        <Route path='item/:itemid' component={() => <ProductDetail myProp={"dsa"}/>} />
//<Route excact path='item' component={Home} />
