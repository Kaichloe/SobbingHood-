import React from 'react'
import SignUpFormContainer from './components/signup/signup_form_container'
import LoginFormContainer from './components/login&demo/login_form_container'
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import ProfileContainer from './components/profile/profile_container';
import DemoFormContainer from './components/login&demo/demo_container';

const App = () => (
  <div>
      <Route exact path="/" component={Homepage}/> 
      <Switch>
        <ProtectedRoute exact path="/profile"component={ProfileContainer}/>
        <AuthRoute exact path="/demoUser" component={DemoFormContainer} /> 
        <AuthRoute exact path="/signup" component={SignUpFormContainer}/> 
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
      </Switch>
  </div>
);

export default App;
