
import { db } from "../firebase/firebase";

/*
Cargamos las compras dependiendo de la cantidad que hayamos obtenido que existe en la base de datos 
esas son las veces que el ciclo traera una por una 
Si en el loadCantidad obtenemos 5 entonces el for recorrera 5 veces el documento historial traera las colecciones de compras del 1 al 5 con sus dulces
*/

export const loadCompras = async (uid,cantidad) => {
   const history = []
   for(let i = 1;i <= cantidad;i ++){
    const comprasSnap = await db.collection(`${uid}/historial/${i}`).get();
    const compras = [];
  
    compras.push(`${i}`);
    comprasSnap.forEach((comprasHijo) => {
      compras.push({
        idSweet: comprasHijo.id,
        ...comprasHijo.data(),
      });
     
    });
    // compras.push(`compra#${i}`)
    history.push(compras)
   
   }

   return history;
}
