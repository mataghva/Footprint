import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/login_container';
import { AuthRoute, ProtectedRoute }  from '../utils/route_utils';

const App = () => (

    <div>
        <Route path="/" component={NavBarContainer} />
        <AuthRoute exact path="/signup" component={SignUpContainer} />
        <AuthRoute exact path="/login" component={LogInContainer} />
        <Redirect from="*" to="/"/>
    </div>
);

export default App;


