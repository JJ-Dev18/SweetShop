import React from 'react'

export const ProductsCompras = () => {

  const { compras } = useSelector((state) => state.history);
  return (
    <div>
      <ul>
        {compras.forEach((compra) =>
          compra.map((sweet) => (
            <li>
              <Compras key={sweet.id} {...sweet} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
