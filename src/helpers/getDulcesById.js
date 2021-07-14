


/*Aqui recorrimos cada compra e ignoramos la coleccion 'info' para solo agregar los dulces dependiendo de el id
  el id lo agregamos nosotros segun la cantidad de compras que haya hecho el usuario 
*/

export const getDulcesById = (id,compras) => {
  const sweets = [];
for(let i = 0 ;i < compras.length;i ++){
       const nombre = (compras[i][0]);
       
      if(nombre === id){
        
        for(let j = 1;j < compras[i].length;j++){
          if(compras[i][j].idSweet !== 'info')
          sweets.push(compras[i][j])
        }
        break;
      }
     
}
 return sweets;
}