
import { types } from "../types/types";
export const openCarrito = () => ({
  type: types.openCarrito,
  payload: true,
});

export const closeCarrito = () => ({
  type: types.closeCarrito,
  payload: false,
});

//Cargamos el nuevo producto a el carrito, si el producto ya existe solo agregamos la cantidad , si no existe agregamos el producto
export const loadAddCarrito = (sweet, cantidad) => {
  return (dispatch, getState) => {
    const sweets = getState().carrito.sweets;
    let exist = false;
    const cantidadSweet = sweets.length + 1;

    sweets.forEach((stateSweet) => {
      
        if (stateSweet.id === sweet.id) {
          exist = true;
          cantidad = stateSweet.cantidad + cantidad;
          
        }
      
    });
    const total = cantidad * sweet.precio;
    if (!exist) {
      dispatch(addSweetCarrito(sweet, cantidad, cantidadSweet, total));
    } else {
      dispatch(changeCantidadSweet(sweet.id, sweet, cantidad, total));
    }
  };
};
//Agregamos el dulce a el state de dulces,con su cantidad y su total anteriormente calculado
export const addSweetCarrito = (sweet, cantidad, cantidadSweet, total) => ({
  type: types.addSweetCarro,
  payload: {
    cantidadSweet,
    sweet: {
      ...sweet,
      cantidad,
      total,
    },
  },
});
//Cambiamos la cantidad  del dulce
export const changeCantidadSweet = (id, sweet, cantidad, total) => ({
  type: types.addCantidadSweet,
  payload: {
    id,
    sweet: {
      id,
      ...sweet,
      cantidad,
      total,
    },
  },
});
//agregamos nueva cantidad del dulce 
export const addCantidadSweet = (sweet) => ({
  type: types.addCantidadSweet,
  payload: sweet,
});
//Actualizamos el total si un dulce es eliminado 
export const uploadTotalDelete = (id,totalSweet) => {
   return (dispatch,getState) => {
      const {total} = getState().carrito

      const newTotal = total - totalSweet;
      dispatch(setTotal(newTotal))
      dispatch(deleteSweet(id))
   }
   
}
//eliminamos el dulce 
export const deleteSweet = (id) => ({
  type: types.deleteSweet,
  payload: id,
});
//cambios el total en el state 
export const setTotal = (total) => ({
  type: types.totalCarro,
  payload: total,
});
//Calculamos el total de todos los dulces
export const calcularTotal = () => {
  return (dispatch, getState) => {
    let total = 0;
    const { sweets } = getState().carrito;
  
    sweets.forEach((sweet) => {
      total = total + sweet.total;
    });
    dispatch(setTotal(total));
  };
};
//vaciamos ducles en el carrito 
export const comprarCarrito = () => ({
  type : types.comprarCarro,
  payload : []
  
})

