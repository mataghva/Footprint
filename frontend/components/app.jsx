import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/login_container';
import { AuthRoute, ProtectedRoute }  from '../utils/route_utils';

const App = () => (

    <div>
        <Route path="/" component={NavBarContainer} />
        <AuthRoute path="/signup" component={SignUpContainer} />
        <AuthRoute path="/login" component={LogInContainer} />
        
    </div>
);

export default App;


