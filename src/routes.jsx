import React from 'react';
import { Switch, Route, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';


export const HOME = '/';

const { ConnectedRouter } = routerRedux;

export default ({ history, app }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route
        exact
        path={HOME}
        component={dynamic({
          app,
          component: () => import('./components/Home'),
        })}
      />
    </Switch>
  </ConnectedRouter>
);