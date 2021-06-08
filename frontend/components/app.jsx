import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/login_container';
import { AuthRoute, ProtectedRoute }  from '../utils/route_utils';

const App = () => (

    <div>
        <Switch>
            <AuthRoute exact path="/signup" component={SignUpContainer} />
            <AuthRoute exact path="/login" component={LogInContainer} />
            <Route exact path="/" component={NavBarContainer} />
            <Redirect from="*" to="/"/>
        </Switch>
    </div>
);

export default App;


