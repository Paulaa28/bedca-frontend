import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import App from './App';
import {
    Contact,
    Home,
    ListFood,
    Api
} from './screens';

function AppRoutes() {
    return (
        <App>
            <Switch>
                <Route
                    exact
                    path="/home"
                    component={Home}
                />
                <Route
                    exact
                    path="/contact"
                    component={Contact}
                />
                <Route
                    exact
                    path="/listfood"
                    component={ListFood}
                />
                 <Route
                    exact
                    path="/api"
                    component={Api}
                />
                <Redirect exact from="/" to="/home" />
                <Redirect from="*" to="/home" />
            </Switch>
        </App>
    )
}

export default AppRoutes;
