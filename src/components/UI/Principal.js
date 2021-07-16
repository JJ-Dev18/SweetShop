import React ,{useEffect}from 'react'
import {Shop} from '../shop/Shop'
import {Carrito} from '../shop/Carrito'
import {  useSelector,useDispatch } from "react-redux";
import { loadHistory } from '../../actions/historial';


export const Principal =() => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log('cargo principal')
  //   dispatch(loadHistory())
  // }, [dispatch])

  const {open:openCarrito} = useSelector( state => state.carrito );
  return (
    < >
      {(openCarrito) ? <Carrito /> : <Shop/> }
    
    </>
  );
}
