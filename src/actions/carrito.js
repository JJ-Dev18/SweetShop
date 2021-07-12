import { db } from "../firebase/firebase";
import { types } from "../types/types";

// export const startNewProducto = () => {
//   return async (dispatch, getState) => {
//     const { uid } = getState().auth;
//     const newNote = {
//       title: "",
//       body: "",
//       date: new Date().getTime(),
//     };

//     const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

//     dispatch(activeNote(doc.id, newNote));
//     dispatch(addNewNote(doc.id, newNote));
//   };
// };
export const openCarrito = () => ({
  type: types.openCarrito,
  payload: true,
});

export const closeCarrito = () => ({
  type: types.closeCarrito,
  payload: false,
});
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

export const addCantidadSweet = (sweet) => ({
  type: types.addCantidadSweet,
  payload: sweet,
});
export const uploadTotalDelete = (id,totalSweet) => {
   return (dispatch,getState) => {
      const {total} = getState().carrito

      const newTotal = total - totalSweet;
      dispatch(setTotal(newTotal))
      dispatch(deleteSweet(id))
   }
   
}

export const deleteSweet = (id) => ({
  type: types.deleteSweet,
  payload: id,
});
export const setTotal = (total) => ({
  type: types.totalCarro,
  payload: total,
});
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
export const comprarCarrito = () => ({
  type : types.comprarCarro,
  payload : []
  
})


export const updateCantidadSweet = () => {};
