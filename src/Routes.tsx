import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NewMessageForm from './NewMessageForm';
import NewUserForm from './NewUserForm';
import LandingPage from './LandingPage';
import { newUser } from './graphql'

function Routes({submit}) {
    return (<div>
        <Switch>
            <Route exact path="/">
                <LandingPage />
            </Route>
            <Route exact path="/messages/new">
                <NewMessageForm submit={submit}/>
            </Route>
            <Route exact path="/users/new">
                <NewUserForm />
            </Route>
        </Switch>
    </div>)
}

export default Routes;