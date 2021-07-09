import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteSweet } from '../../actions/carrito';
import { useForm } from "../../hooks/useForm";

export const SweetsCarrito = ({id,Nombre,cantidad,url}) => {

  const dispatch = useDispatch();
  // const [formValues, handleInputChange] = useForm({});
  // let { cantidad } = formValues;

  const handleDelete = () => {
    dispatch(deleteSweet(id))
  }
 
  return (
    <div className="carrito_product">
      <div className="header_product">
        <span>{Nombre}</span>
        <i className="fas fa-trash pointer" onClick={handleDelete}></i>
      </div>
      <div className="img_product">
        <img
          src={url}
          width="40px"
        ></img>
      </div>
      <div className="info_product">
       {cantidad }
     
      </div>
    </div>
  );
}
