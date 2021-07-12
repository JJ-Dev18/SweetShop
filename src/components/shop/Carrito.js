import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {  calcularTotal, closeCarrito, comprarCarrito } from '../../actions/carrito';
import {
  addCantidadHistory,
  addCompraHistorial,
  loadHistory
} from "../../actions/historial";
import { openProducts } from '../../actions/products';
import { SweetsCarrito } from './SweetsCarrito';

export const Carrito = () => {
  
  const dispatch = useDispatch();
  const {total : totalP} = useSelector( state => state.carrito );
  const {sweets} = useSelector( state => state.carrito );
  const [totalState, settotalState] = useState(totalP)
  
  const handleBack = () => {
     dispatch(closeCarrito())
     dispatch(openProducts())
  }
  const handleComprar = () => {
    dispatch(addCantidadHistory())
    dispatch(addCompraHistorial())
    dispatch(comprarCarrito());
  }
  useEffect(() => {
    dispatch(calcularTotal())
    
  }, [dispatch])

  return (
    <div className="content_products animate__animated animate__fadeIn">
      <i className="fas fa-backspace pointer" onClick={handleBack}></i>
      <h1>Shopping cart</h1>
      <div className="grid_products">
        {sweets.map((sweet) => (
          <SweetsCarrito key={sweet.id} {...sweet} />
        ))}
      </div>
      <span>Total = {totalP} </span>
      <button className="btn-danger" onClick={handleComprar}>
        Comprar
      </button>
    </div>
  );
}
