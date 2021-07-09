
export const totalCarrito = (sweets) => {
   
   let total ;
   sweets.map(sweet => 
      total += sweet.cantidad * sweet.precio
    )
    console.log(total)
    return total;
}