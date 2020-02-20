import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import FormView from '../pages/FormView';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Login} />

      <Route path='/trees' component={FormView} isPrivate />
    </Switch>
  );
}
