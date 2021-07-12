import { addCantidadHistory } from "../actions/historial";
import { db } from "../firebase/firebase";

export const loadCompras = async (uid,cantidad) => {
   const history = []
   for(let i = 1;i <= cantidad;i ++){
    const comprasSnap = await db.collection(`${uid}/historial/compra#${i}`).get();
    const compras = [];
    comprasSnap.forEach((comprasHijo) => {
      compras.push({
        id: comprasHijo.id,
        ...comprasHijo.data(),
      });
    });
    history.push(compras)
   }
  //  console.log(history)
   return history;
}
