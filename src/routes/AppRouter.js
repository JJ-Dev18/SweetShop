import React from 'react'
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import {ProductsScreen} from '../components/products/ProductsScreen'
import {AuthRouter} from './AuthRouter'
import {PrivateRouter} from './PrivateRouter'
import {PublicRouter} from './PublicRouter'
const isLoggedIn= false;
export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRouter
            isLoggedIn={isLoggedIn}
            path="/auth"
            component={AuthRouter}
          />
          <PrivateRouter
            isLoggedIn={isLoggedIn}
            exact
            path="/"
            component={ProductsScreen}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
}
