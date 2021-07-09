import React ,{useEffect}from 'react'
import {ProductsScreen} from '../products/ProductsScreen'
import {useSelector,useDispatch} from 'react-redux'
import { Navbar } from '../UI/Navbar'
import { openCarrito, setTotal } from '../../actions/carrito'
import { totalCarrito } from '../../helpers/totalCarrito'
export const Shop = () => {
   const dispatch = useDispatch();
   const { sweets } = useSelector((state) => state.product  );
   const { cantidad } = useSelector((state) => state.carrito);
   const handleCarritoOpen = () => {
      dispatch(openCarrito())
   } 
   
  //  useEffect(() => {
     
  //    dispatch(setTotal(totalCarrito(sweets)));
  //  }, [sweets]);

  return (
    <div className="content_products">
      <h1>Sweets</h1>
      <i className="fas fa-shopping-cart carrito_icon pointer" onClick={handleCarritoOpen}>{cantidad}</i>
      <div className="grid_products">
       {
         
          sweets.map(sweet => (
               <ProductsScreen
                key={sweet.id} 
                {...sweet}
                />
          ))
       }
      </div>
    </div>
  );
}
