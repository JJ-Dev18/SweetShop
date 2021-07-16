import React ,{useEffect}from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { loadCantidadHistory, loadHistory } from '../../actions/historial';
import { getDatosCompras } from '../../helpers/getDatosCompra';
import { Compras } from './Compras';
import Swal ,{timerInterval}from "sweetalert2";

export const Historial = () => {
  const dispatch = useDispatch();

  const {compras} = useSelector( state => state.history );
  const {uid} = useSelector( state => state.auth );
  let info = getDatosCompras(compras)
  

useEffect(() => {
  console.log('no sirve el condicional pero si el useeefect')
  
  if(compras === []){
    dispatch(loadCantidadHistory(uid))
    dispatch(loadHistory(uid));
    console.log('sirve el condicional pero no los dispatch')
  }
}, [dispatch])
  return (
    <>
      <div className="content_historial">
        <ul>
          <li>
            {
              (compras === undefined) && <h1>cargando ...</h1>
            }
             
    
            {info.map((inf) => (
              <Compras key={inf.nombre} nombre={inf.nombre} total={inf.total} />
            ))}
          </li>
        </ul>
      </div>
    </>
  );
}
