import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import {Wrapper} from './components';
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
                >
                    <Wrapper>
                        <Home />
                    </Wrapper>
                </Route>
                <Route
                    exact
                    path="/contact"
                >
                    <Wrapper>
                        <Contact />
                    </Wrapper>
                </Route>
                <Route
                    exact
                    path="/listfood"
                >
                    <Wrapper>
                        <ListFood />
                    </Wrapper>
                </Route>
                <Route
                    exact
                    path="/api"
                >
                    <Wrapper>
                        <Api />
                    </Wrapper>
                </Route>
                
                <Redirect exact from="/" to="/home" />
                <Redirect from="*" to="/home" />
            </Switch>
        </App>
    )
}

export default AppRoutes;
