import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/login_container';
import Home from './home/home';
import { AuthRoute, ProtectedRoute }  from '../utils/route_utils';

const App = () => (
    <div>
        <NavBarContainer/>
        <div>
            <Switch>
                <AuthRoute exact path="/signup" component={SignUpContainer} />
                <AuthRoute exact path="/login" component={LogInContainer} />
            <Route exact path="/" component={Home}/>
                <Route render={() => <Redirect exact to={{pathname: "/"}} />} />
              
            </Switch>
        </div>
    </div>
);

export default App;


