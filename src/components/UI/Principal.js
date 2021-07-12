import React from 'react'
import { Navbar } from './Navbar'
import {Shop} from '../shop/Shop'
import {Carrito} from '../shop/Carrito'
import {  useSelector } from "react-redux";
import { Menu } from './Menu';
import { Historial } from '../historial/Historial';

export const Principal = () => {

  const {open:openCarrito} = useSelector( state => state.carrito );
  const {open:openMenu} = useSelector( state => state.menu );
  const {open:openProducts} = useSelector( state => state.product );
  const {open:openHistory} = useSelector( state => state.history  );
  return (
    < >
      {(openCarrito) ? <Carrito /> : <Shop/> }
    
    </>
  );
}
