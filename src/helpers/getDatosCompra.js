/*
Se agrego una collecion a cada compra llamada info donde se encuentra el total y el ID de la compra
para esto tuvimos que recorrer cada compra sacar esa coleccion y extraer sus datos para posteriormente
utilizarlos en el componente de compras (Total,Nombre(id))

*/


export const getDatosCompras = (compras) => {
  let info = [];
  for (let i = 0; i < compras.length; i++) {
    const nombre = compras[i][0];
    let total = 0;
    for (let j = 1; j < compras[i].length; j++) {
      const tota = compras[i][j].idSweet;
      
      if (tota === "info") {
        total = compras[i][j].total;
      }
    }

    let dato = {
      nombre,
      total,
    };
    info.push(dato);
  }

  return info;
};
