import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Summary } from '../pages/Summary';

export const Routes: React.FC = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/summary" component={Summary} />
    </Switch>
  </>
);
