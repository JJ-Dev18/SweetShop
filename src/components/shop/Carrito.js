import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {  calcularTotal, closeCarrito, comprarCarrito } from '../../actions/carrito';
import {
  addCantidadHistory,
  addCompraHistorial,
} from "../../actions/historial";
import { openProducts } from '../../actions/products';
import { SweetsCarrito } from './SweetsCarrito';
import Swal  from 'sweetalert2';
export const Carrito = () => {
  
  const dispatch = useDispatch();
  const {total : totalP} = useSelector( state => state.carrito );
  const {sweets} = useSelector( state => state.carrito );

  
  const handleBack = () => {
     dispatch(closeCarrito())
     dispatch(openProducts())
  }
  const handleComprar = () => {
    if(sweets.length === 0){
      Swal.fire({
        title: "there aren't sweets ",
        icon: "error",
      });
    }else{
Swal.fire({
  title: "Are you sure?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#008f39",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Buy it ",
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire("Buy it!", "Your Shop is load.", "success");
    dispatch(addCantidadHistory());
    dispatch(addCompraHistorial());
    dispatch(comprarCarrito());
  }
});
    }

    
    
  }
  useEffect(() => {
    dispatch(calcularTotal())
    
  }, [dispatch])

  return (
    <div className="content_products animate__animated animate__fadeIn">
      <i className="fas fa-backspace pointer icon_back" onClick={handleBack}></i>
      <h1>Shopping cart</h1>
      <div className="grid_products">
        {sweets.map((sweet) => (
          <SweetsCarrito key={sweet.id} {...sweet} />
        ))}
      </div>
      <span>Total = {totalP} </span>
      <button className="btn-danger btn-comprar" onClick={handleComprar}>
        Buy
      </button>
    </div>
  );
}
