import React from 'react'
import { useParams } from 'react-router-dom';

export const SweetsCompras = () => {
  const params = useParams()
  
  return (
    <div className="content_products">
      <h1>Hola dulces</h1>
    </div>
  );
}
