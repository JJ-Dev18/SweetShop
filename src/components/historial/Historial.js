import React ,{useEffect}from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { loadHistory } from '../../actions/historial';

import { Compras } from './Compras';

export const Historial = () => {
  const dispatch = useDispatch();
  const {compras} = useSelector( state => state.history );
  const {uid} = useSelector( state => state.auth );

  let info = []

  for(let i = 0 ;i < compras.length;i ++){
       const nombre = (compras[i][0]);
       let total = 0
       for(let j = 1 ; j < compras[i].length; j++){  
         const tota = compras[i][j].idSweet
         if(tota === 'info'){
           total = compras[i][j].total
         } 
       }
       const dato = {
         nombre,total
       }
       info.push(dato)
  } 


  useEffect(() => {
    dispatch(loadHistory(uid))
  }, [dispatch])

  return (
    <div className="content_historial">
      <ul>
        <li>
          {info.map((inf) => (
            <Compras key={inf.nombre} nombre={inf.nombre} total={inf.total} />
          ))}
        </li>
      </ul>
    </div>
  );
}
