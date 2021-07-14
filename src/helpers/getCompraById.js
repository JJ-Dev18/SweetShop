


export const getDatosCompras = (compras) => {
    let info = []
    let sweet={}
    let sweets  = [];
     for(let i = 0 ;i < compras.length;i ++){
       const nombre = (compras[i][0]);
       let total = 0
       for(let j = 1 ; j < compras[i].length; j++){  
         const tota = compras[i][j].idSweet
         if(tota === 'info'){
           total = compras[i][j].total
         } 
         else{
          sweet = compras[i][j]
          sweets.push(sweet)
         }
       }
      let dato ={
        nombre,total
      }
      info.push(dato)
  } 
   
  return [info,sweets];
}

export const getDulcesById = (id) => {


}