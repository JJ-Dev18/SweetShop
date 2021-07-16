import React from 'react'
import { startLogout } from "../../actions/auth";
import { useDispatch,useSelector } from "react-redux";
import { openMenu } from '../../actions/menu';
import {  useHistory } from "react-router-dom";
import { resetCarrito } from '../../actions/carrito';


export const Navbar = () => {
   const dispatch = useDispatch();
  
  const { name, photoURL } = useSelector((state) => state.auth);
  const history = useHistory();
 
  const handleLogout = () => {
    dispatch(startLogout());
    dispatch(resetCarrito())
    history.replace('/login')
  };
  const handleOpenMenu = () => {
    dispatch(openMenu())
  }
  return (
    <div className="navBar">
      <img src={photoURL} width="40px" height="40px" alt="imagen profile" className="pointer" onClick={handleOpenMenu}></img>
      
      <span>{name} </span>
      {/* <form>
        <input
          onChange={handleInputChange}
          type="text"
          name="searchText"
          value={searchText}
          placeholder="Find your sweet"
          autoComplete="off"
          className="form-control"
        ></input>
        <button className="btn m-1 btn-block btn-outline-primary">
          Search...
        </button> */}
        <button className="btn-danger" onClick={handleLogout}>
          Logout
        </button>
      {/* </form> */}
    </div>
  );
}
