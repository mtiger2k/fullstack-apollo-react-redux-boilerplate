import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import StoryPage from '../Story';
import withSession from '../Session/withSession';

import * as routes from '../../constants/routes';

const App = ({ session, refetch, history }) => (
  <ConnectedRouter history={history}>
    <div>
      <Navigation session={session} />

      <hr />
      
      <Route
        exact
        path={routes.LANDING}
        component={() => <LandingPage />}
      />
      <Route
        exact
        path={routes.SIGN_UP}
        component={() => <SignUpPage refetch={refetch} />}
      />
      <Route
        exact
        path={routes.SIGN_IN}
        component={() => <SignInPage refetch={refetch} />}
      />
      <Route
        exact
        path={routes.ACCOUNT}
        component={() => <AccountPage />}
      />
      <Route
        exact
        path={routes.ADMIN}
        component={() => <AdminPage />}
      />
      <Route
        exact
        path={routes.STORY}
        component={() => <StoryPage />}
      />
      
    </div>
  </ConnectedRouter>
);

export default withSession(App);
