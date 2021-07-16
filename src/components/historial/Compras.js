import React from 'react'
import { Link } from "react-router-dom";
import { Sweets } from './Sweets';

export const Compras = React.memo(({nombre,total}) => {
 
 
  return (
    <div>
      <h2>Compra # {nombre}</h2>
      <p>Total : {total}</p>
      <span id="verMas">
        <Link to={`/historial/${nombre}`}>Ver mas ...</Link>
      </span>
     
    </div>
  );
})
