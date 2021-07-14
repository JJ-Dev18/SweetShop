import React from 'react'
import {useSelector} from 'react-redux'
import { getDatosCompras } from '../../helpers/getDatosCompra';


import { Compras } from './Compras';

export const Historial = () => {

  const {compras} = useSelector( state => state.history );
  let info = getDatosCompras(compras)

  return (
    <div className="content_historial">
      <ul>
        <li>
          {info.map((inf) => (
            <Compras key={inf.nombre} {...info} />
          ))}
        </li>
      </ul>
    </div>
  );
}
