import React from 'react'
import { Link, NavLink, useHistory } from "react-router-dom";

export const Compras = ({nombre,total}) => {
 
  return (
    <div>
      <h2>{nombre}</h2>
      <p>{total}</p>
      <span>
        <Link to="/historial/compra">Ver mas ...</Link>
      </span>
    </div>
  );
}
