import React from 'react'
import {Shop} from '../shop/Shop'
import {Carrito} from '../shop/Carrito'
import {  useSelector } from "react-redux";


export const Principal =() => {
 

  const {open:openCarrito} = useSelector( state => state.carrito );
  return (
    < >
      {(openCarrito) ? <Carrito /> : <Shop/> }
    
    </>
  );
}
