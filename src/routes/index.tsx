import React from 'react';

import { Switch } from 'react-router-dom';

import NotFound from './NotFound';
import RouteWrapper from './RouteWrapper';

import Main from '../pages/Main';

const Routes: React.FC = () => {
  return (
    <Switch>
      <RouteWrapper component={Main} exact path="/" />
      <RouteWrapper component={NotFound} path="*" />
    </Switch>
  );
};

export default Routes;
