import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import App from './App';
import {
    Contact,
    Home,
    Api,
    Food
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
                    path="/api"
                    component={Api}
                />
                <Route 
                exact
                path="/food/:id"
                component={Food}
                />
                <Redirect exact from="/" to="/home" />
                <Redirect from="*" to="/home" />
            </Switch>
        </App>
    )
}

export default AppRoutes;
