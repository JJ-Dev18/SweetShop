import React from 'react'
import { Link } from "react-router-dom";

export const Compras = React.memo(({nombre,total}) => {
 
 
  return (
    <div>
      <h2>{nombre}</h2>
      <p>{total}</p>
      <span>
        <Link to={`/historial/${nombre}`}>Ver mas ...</Link>
      </span>
    </div>
  );
})
