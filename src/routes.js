import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Categories from './components/categories/Categories'
import Jokes from './components/jokes/Jokes';

const Routes = () => (
    <App>
        <Switch >
            <Route exact path='/' component={Categories} />
            <Route exact path='/:category' component={Jokes} />
        </Switch>
    </App>
)

export default Routes;