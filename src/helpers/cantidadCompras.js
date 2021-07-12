import { addCantidadHistory } from "../actions/historial";
import { db } from "../firebase/firebase";

export const loadCantidadCompras = async (uid) => {
  const history = [];
  // for (let i = 1; i <= cantidad; i++) {
    const comprasSnap = await db.collection(`${uid}/historial`).get()
    
    const datos = comprasSnap.data()
    
  return datos;
// }
}