import React from 'react'

export const Sweets = React.memo(({Nombre,precio,cantidad,total}) => {

  return (
    <div className="content_product_compra">
      <h1>{Nombre}</h1>
      <div>
        <h2>Precio unidad : {precio}</h2>
        <h2>Cantidad : {cantidad}</h2>
        <span>Total : {total}</span>
      </div>
    </div>
  );
})
