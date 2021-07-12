import React ,{useEffect}from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { loadHistory } from '../../actions/historial';
import { Compras } from './Compras';

export const Historial = () => {
  const dispatch = useDispatch();
  const {compras} = useSelector( state => state.history );
  
  

  return (
    <div className="content_historial">
      <ul>
        {compras.map((compra) => (
          <li>
            {" "}
            <Compras key={compra.id} {...compra} />
          </li>
        ))}
      </ul>
    </div>
  );
}
