import React from 'react'
import {useDispatch} from 'react-redux'
import { loadAddCarrito } from '../../actions/carrito';
import { useForm } from '../../hooks/useForm';

const initialState = {
  cantidad : ""
}
export const ProductsScreen = React.memo((sweet) => {
  const dispatch = useDispatch();
  const [formValues,handleInputChange,reset] = useForm(initialState)
  let {cantidad} = formValues

  const handleAdd = () => {
    console.log(cantidad)
     if(cantidad === ""){
       cantidad = 1 ;
     }
     else{
       cantidad = parseInt(cantidad);
     }
     dispatch(loadAddCarrito(sweet,cantidad))
     reset()
  }
  return (
    <div className="product">
      <div className="header_product">
        <span>{sweet.Nombre}</span>
        <i className="fas fa-plus-circle pointer" onClick={handleAdd}></i>
      </div>
      <div className="img_product">
        <img
          src={sweet.url}
          alt="imagen producto"
        ></img>
      </div>
      <div className="info_product">
        ${sweet.precio}
        <input type="number" name="cantidad" onChange={handleInputChange} value={cantidad}></input>
      </div>
    </div>
  );
})
