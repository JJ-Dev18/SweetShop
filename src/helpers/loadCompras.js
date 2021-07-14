import { addCantidadHistory } from "../actions/historial";
import { db } from "../firebase/firebase";

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
