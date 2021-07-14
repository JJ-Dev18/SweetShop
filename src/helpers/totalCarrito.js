
//Sumamos el total de cada dulce para encontrar el total final de la compra
export const totalCarrito = (sweets) => {
   
   let total ;
   sweets.map(sweet => 
      total += sweet.cantidad * sweet.precio
    )
    return total;
}