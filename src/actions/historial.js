import { db } from '../firebase/firebase'
import { loadCantidadCompras } from '../helpers/cantidadCompras'
import { loadCompras } from '../helpers/loadCompras'
import {types} from '../types/types'



export const loadHistory = () => {

  return async (dispatch,getState) => {
    const {uid} = getState().auth
    const{ cantidad} = getState().history
    const compras = await  loadCompras(uid,cantidad)
    console.log(compras)
    dispatch(setHistory(compras))
  }
}
export const setHistory = (compras) => ({
  type: types.setHistory,
  payload: compras,
});
export const addCompraHistorial = () => {
  return async (dispatch, getState) => {
    const { sweets,total } = getState().carrito;
    const { uid } = getState().auth;
    const { cantidad } = getState().history;
    const Numero = {
      num: cantidad
    }
    const data = {
       total
    }
    await db.collection(`${uid}/historial/compra#${cantidad}`).doc('info').set(data);
    for (let i = 0; i < sweets.length; i++) {
      const doc = await db
        .collection(`${uid}/historial/compra#${cantidad}`)
        .add(sweets[i]);
    }
     
   const cantidadCompras = await db.collection(`${uid}`).doc('cantidad').set(Numero);
  //   const comprasCantidad = await db.collection(`${uid}/historial/cantidadCompras`).get()
  //   const numero = comprasCantidad.data()
  //   // const {numero:cantidadC } = numero;
  //   console.log(numero)
  
  };
};

export const loadCantidadHistory = () => {
  return async(dispatch,getState) => {
    const {uid} = getState().auth
    const cantidad = await loadCantidadCompras(uid)
    dispatch(startLoadCantidadHistory(cantidad))
    
  }
}
export const startLoadCantidadHistory = (cantidad) => ({
  type : types.loadCantidadHistory,
  payload : cantidad
})
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