import React from 'react'
import { Navbar } from './Navbar'
import {Shop} from '../shop/Shop'
import {Carrito} from '../shop/Carrito'
import { useDispatch, useSelector } from "react-redux";

export const Principal = () => {

  const {open} = useSelector( state => state.carrito );
  return (
    <div className="content_principal">
      <Navbar />
      
      {(open) ?  <Carrito /> :  <Shop />}
    </div>
  );
}
