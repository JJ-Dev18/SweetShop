import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Link,  useHistory } from "react-router-dom";
import {  startLogout } from '../../actions/auth';
import {  closeCarrito, openCarrito } from '../../actions/carrito';

import { openMenu } from '../../actions/menu';


export const Menu = () => {
  const dispatch = useDispatch();
  
  const handleShopping = () => {
    dispatch(openCarrito());
    dispatch(openMenu());
  };
  const handleMenu = ()=> {
    dispatch(openMenu())
    dispatch(closeCarrito())
  }
  // };
  const handleLoggout = () => { 
    // if (open) {
    //   dispatch(openMenu());
    //   }
    dispatch(startLogout());
    
  };
  return (
    <div className="content_menu animate__animated   animate__fadeIn">
      <ul>
        <Link
          to="/shop"
          className="nav_link animate__animated animate__backInLeft animate__faster	"
          onClick={handleMenu}
        >
          Products
        </Link>
        <Link
          to="/shop"
          className="nav_link animate__animated animate__backInLeft animate__fast"
          onClick={handleShopping}
        >
          Shopping cart
        </Link>
        <Link
          to="/historial"
          className="nav_link animate__animated animate__backInLeft "
          onClick={handleMenu}
        >
          Shop History
        </Link>
        <Link
          onClick={handleLoggout}
          className="nav_link animate__animated animate__backInLeft animate__slow"
          to="/login"
        >
          Log out
        </Link>
      </ul>
    </div>
  );
}
