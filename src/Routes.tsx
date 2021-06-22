import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NewMessageForm from './NewMessageForm';
import NewUserForm from './NewUserForm';
import LandingPage from './LandingPage';

function Routes() {
    return (<div>
        <Switch>
            <Route exact path="/">
                <LandingPage />
            </Route>
            <Route exact path="/messages/new">
                <NewMessageForm />
            </Route>
            <Route exact path="/users/new">
                <NewUserForm />
            </Route>
        </Switch>
    </div>)
}

export default Routes;