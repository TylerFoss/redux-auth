import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import NotFound from './components/NotFound';
import Admin from './components/Admin';
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';
import AuthenticatedRoutes from './components/AuthenticatedRoutes';
import { UserAuthWrapper } from 'redux-auth-wrapper';

const AdminAccess = UserAuthWrapper({
  authSelector: state => state.user,
  predicate: user => { return user.role === 'admin' }, 
  wrapperDisplayName: 'UserIsAdmin'
});

const AdminRoutes = AdminAccess( props => props.children )

export default (
  <Route>
    <Route path="/" component={App}>
      <Route path="signup" component={Auth} title="Sign Up" />
      <Route path="login" component={Auth} title="Sign In" />
      <Route component={AuthenticatedRoutes}>
        <Route path="/dashboard" component={Dashboard} />
        <Route component={AdminRoutes}>
          <Route path="/admin" component={Admin} />
        </Route>
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  </Route>
);




