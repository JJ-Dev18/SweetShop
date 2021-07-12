import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { Historial } from '../components/historial/Historial';
import {useSelector} from 'react-redux'
import { Carrito } from '../components/shop/Carrito';
import { Shop } from '../components/shop/Shop';
import { Navbar } from '../components/UI/Navbar';
import { Principal } from '../components/UI/Principal';
import { Menu } from '../components/UI/Menu';

export const DashboardRoutes = () => {
   const { open } = useSelector((state) => state.menu);
  return (
    <>
      <Navbar />
      {open && <Menu />}
      <div className="content_principal">
        <Switch>
          <Route exact path="/shop" component={Principal} />
          <Route exact path="/historial" component={Historial} />

          <Redirect to="/shop" />
        </Switch>
      </div>
    </>
  );
};
