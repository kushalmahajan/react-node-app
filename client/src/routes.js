import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import App from './components/App';
// import About from './components/About';
import NotFound from './components/NotFound';
import logo from './logo.svg';
import classnames from 'classnames';

const Routes = (props) => (

    <BrowserRouter>
        <div>
            <div className={classnames('sidebar')}>
                <img src={logo} className="App-logo" alt="logo"/>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {/*<li><Link to="/about">About</Link></li>*/}
                    <li><Link to="/contactus">Contact us</Link></li>
                </ul>
            </div>

            <Switch>
                <Route exact  path='/' component={App} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default Routes;

