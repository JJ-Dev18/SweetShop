import React, {useState,useEffect} from 'react'
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
 import { firebase } from "../firebase/firebase";
import {AuthRouter} from './AuthRouter'
import {PrivateRouter} from './PrivateRouter'
import {PublicRouter} from './PublicRouter'
import {useDispatch} from 'react-redux'
import { login } from '../actions/auth';
import { startLoadProducts } from '../actions/products';
import { DashboardRoutes } from './DashBoardRoutes';
import { loadCantidadHistory, loadHistory } from '../actions/historial';
export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(loadHistory(user.uid));
        dispatch(login(user.uid, user.displayName,user.photoURL));
        setIsLoggedIn(true);
        dispatch(startLoadProducts());
        dispatch(loadCantidadHistory())
        
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    
    return <h1>Mas....</h1>
    
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
            
            path="/"
            component={DashboardRoutes}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
}
