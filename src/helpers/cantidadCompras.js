import { addCantidadHistory } from "../actions/historial";
import { db } from "../firebase/firebase";

export const loadCantidadCompras = async (uid) => {
  
  // for (let i = 1; i <= cantidad; i++) {
    const cantidad = 0;
    const comprasSnap = await db.collection(`${uid}`).doc('cantidad').get()
    
    const numero = comprasSnap.data()

    if(numero === undefined){
      return cantidad;
    }
    else{
     const {num} = numero;
     return num;
    }
    // if (num === undefined){
    //   return 0
    // }
    // else
   
// }
}