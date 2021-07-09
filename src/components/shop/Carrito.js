import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { calcularTotal, closeCarrito, setTotal } from '../../actions/carrito';
import { SweetsCarrito } from './SweetsCarrito';

export const Carrito = () => {
  
  const dispatch = useDispatch();
  const {total : totalP} = useSelector( state => state.carrito );
  const {sweets} = useSelector( state => state.carrito );
  
  const handleBack = () => {
     dispatch(closeCarrito())
  }
  useEffect(() => {
    dispatch(calcularTotal())
  }, [])

  return (
    <div className="content_products">
      <i class="fas fa-backspace pointer" onClick={handleBack}></i>
      <h1>Shopping cart</h1>
      <div className="grid_products">
        {sweets.map((sweet) => (
          <SweetsCarrito key={sweet.id} {...sweet} />
        ))}
      </div>
      <span>Total = {totalP} </span>
    </div>
  );
}
