import { db } from '../firebase/firebase'
import { loadCompras } from '../helpers/loadCompras'
import {types} from '../types/types'

export const setHistory = (compras) => ({
     type : types.setHistory,
     payload: [...compras]
})

export const loadHistory = () => {

  return (dispatch,getState) => {
    const {uid} = getState().auth
    const{ cantidad} = getState().history
    loadCompras(uid,2).then();  
    
  }
}
export const addCompraHistorial = () => {
  return async (dispatch, getState) => {
    const { sweets } = getState().carrito;
    const { uid } = getState().auth;
    const { cantidad } = getState().history;
    const Numero = {
      num: 1
    };
    for (let i = 0; i < sweets.length; i++) {
      const doc = await db
        .collection(`${uid}/historial/compra#${cantidad}`)
        .add(sweets[i]);
    }
  //  const cantidadCompras = await db.collection(`${uid}/historial/cantidadCompras`).add(Numero);
  //   const comprasCantidad = await db.collection(`${uid}/historial/cantidadCompras`).get()
  //   const numero = comprasCantidad.data()
  //   // const {numero:cantidadC } = numero;
  //   console.log(numero)
  
  };
};
export const addCantidadHistory= () => {
  return (dispatch,getState) => {
     const { cantidad } = getState().history

     const newCantidad = cantidad+ 1 ;

     dispatch(setCantidadHistory(newCantidad))
  }
}
export const setCantidadHistory = (newCantidad) => ({
  type: types.newCantidadHistory,
  payload : newCantidad
})
export const openHistory = () => ({
 type: types.openHistory

})