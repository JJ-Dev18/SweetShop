
import { db } from "../firebase/firebase";

/*
 Cargamos la cantidad de compras que existe en la base de datos para saber con cual ID sigue la proxima compra si la cantidad es 4
 la siguiente compra es la 5 , si no hay cantidad si no existe entonces devolvemos 0 para que la nueva compra sea la 1 
*/
export const loadCantidadCompras = async (uid) => {
  
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
 
}