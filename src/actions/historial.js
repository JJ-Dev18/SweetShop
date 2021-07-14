import { db } from '../firebase/firebase'
import { loadCantidadCompras } from '../helpers/cantidadCompras'
import { loadCompras } from '../helpers/loadCompras'
import {types} from '../types/types'


//Actualiza la lista de compras en el historial
export const loadHistory = () => {

  return async (dispatch,getState) => {
    const {uid} = getState().auth
    const{ cantidad} = getState().history
    const compras = await  loadCompras(uid,cantidad)
    
    dispatch(setHistory(compras))
  }
}
//Cambia el estado de el history
export const setHistory = (compras) => ({
  type: types.setHistory,
  payload: compras,
});

//Agrega y actualiza la cantidad de compras en la bd y en el state y agrega la nueva compra con sus respectivos dulces
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
    await db.collection(`${uid}/historial/${cantidad}`).doc('info').set(data);
    for (let i = 0; i < sweets.length; i++) {
       await db
        .collection(`${uid}/historial/${cantidad}`)
        .add(sweets[i]);
    }
     
   await db.collection(`${uid}`).doc('cantidad').set(Numero);
   dispatch(loadHistory())
  
  };
};
//Carga la cantidad de compras que hay en la bd al state del history
export const loadCantidadHistory = () => {
  return async(dispatch,getState) => {
    const {uid} = getState().auth
    const cantidad = await loadCantidadCompras(uid)
    dispatch(startLoadCantidadHistory(cantidad))
    
  }
}
//cambia el estado de la cantidad de compras 
export const startLoadCantidadHistory = (cantidad) => ({
  type : types.loadCantidadHistory,
  payload : cantidad
})
//modifica la cantidad de compras en history 
export const addCantidadHistory= () => {
  return (dispatch,getState) => {
     const { cantidad } = getState().history

     const newCantidad = cantidad+ 1 ;

     dispatch(setCantidadHistory(newCantidad))
  }
}
//cambia la cantidad en el state 
export const setCantidadHistory = (newCantidad) => ({
  type: types.newCantidadHistory,
  payload : newCantidad
})

