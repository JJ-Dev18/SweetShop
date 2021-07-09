import React from 'react'
import {  startLogout } from '../../actions/auth';
import {useDispatch,useSelector} from 'react-redux'
import { addCantidadSweet, addSweetCarrito, loadAddCarrito } from '../../actions/carrito';
import { useForm } from '../../hooks/useForm';

const initialState = {
  cantidad : ""
}
export const ProductsScreen = (sweet) => {
  const dispatch = useDispatch();
  const [formValues,handleInputChange,reset] = useForm(initialState)
  let {cantidad} = formValues
  // const sweet = {
  //   id,
  //   cantidad,
  //   Nombre,
  //   precio,
  // };
  const handleAdd = () => {
    console.log(cantidad)
     if(cantidad === ""){
       cantidad = 1 ;
     }
     else{
       cantidad = parseInt(cantidad);
     }
     
     dispatch(loadAddCarrito(sweet,cantidad))
     
    //  dispatch(addCantidadSweet(id,cantidad))
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
          
        ></img>
      </div>
      <div className="info_product">
        ${sweet.precio}
        <input type="number" name="cantidad" onChange={handleInputChange} value={cantidad}></input>
      </div>
    </div>
  );
}
