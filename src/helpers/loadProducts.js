import { db } from "../firebase/firebase";

export const loadProducts = async (uid) => {
  const productSnap = await db
    .collection(`Productos/`)
    .get();
  const products = [];

  productSnap.forEach((snapHijo) => {
    products.push({
      id: snapHijo.id,
      ...snapHijo.data(),
    });
  });
 
  return products;
};
