import React, {useState,useEffect} from 'react'
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
 import { firebase } from "../firebase/firebase";
import {ProductsScreen} from '../components/products/ProductsScreen'
import {AuthRouter} from './AuthRouter'
import {PrivateRouter} from './PrivateRouter'
import {PublicRouter} from './PublicRouter'
import {useDispatch,useSelector} from 'react-redux'
import { login } from '../actions/auth';
const isLoggedIn= false;
export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        // dispatch(startloading(user.uid));
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1> Wait...</h1>;
  }
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
