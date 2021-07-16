import { db } from '../firebase/firebase'
import { loadCantidadCompras } from '../helpers/cantidadCompras'
import { loadCompras } from '../helpers/loadCompras'
import {types} from '../types/types'

//Carga la cantidad de compras que hay en la bd al state del history
export const loadCantidadHistory = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const cantidad = await loadCantidadCompras(uid);
    dispatch(startLoadCantidadHistory(cantidad));
    dispatch(loadHistory(uid,cantidad))
  };
};

//Actualiza la lista de compras en el historial
export const loadHistory = (uid,cantidad) => {

  return  (dispatch,getState) => {
    const compras =  loadCompras(uid,cantidad).then(compritas => dispatch(setHistory(compritas))).catch(e => console.log(e))
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

