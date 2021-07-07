import React from 'react'
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
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
            component={JournalScreen}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
}
