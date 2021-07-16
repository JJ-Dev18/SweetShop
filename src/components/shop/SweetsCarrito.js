import React from 'react'
import { useDispatch} from "react-redux";
import { uploadTotalDelete } from '../../actions/carrito';

export const SweetsCarrito = React.memo(({id,Nombre,cantidad,url,total}) => {
  const dispatch = useDispatch();
  // const [formValues, handleInputChange] = useForm({});
  // let { cantidad } = formValues;

  const handleDelete = () => {
    dispatch(uploadTotalDelete(id,total))
  }
 
  return (
    <div className="carrito_product">
      <div className="header_product">
        <span>{Nombre}</span>
        <i className="fas fa-trash pointer" onClick={handleDelete}></i>
      </div>
      <div className="img_product">
        <img src={url} width="40px" alt="imagen product"></img>
      </div>
      <div className="info_sweet">
        <span> {cantidad}</span>
      </div>
    </div>
  );
})
