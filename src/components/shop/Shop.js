import React from 'react'
import {ProductsScreen} from '../products/ProductsScreen'
import {useSelector,useDispatch} from 'react-redux'
import { openCarrito } from '../../actions/carrito'
import { openProducts } from '../../actions/products'



export const Shop = ({history}) => {
   const dispatch = useDispatch();
   const { sweets } = useSelector((state) => state.product  );
   const { cantidad } = useSelector((state) => state.carrito);
   const {uid} = useSelector( state => state.auth );
  

   const handleCarritoOpen = () => {
      dispatch(openCarrito())
      dispatch(openProducts())
     
      
   } 
   
  //  useEffect(() => {
     
  //    dispatch(setTotal(totalCarrito(sweets)));
  //  }, [sweets]);

  return (
    <div className="content_products animate__animated animate__fadeIn">
      <h1>Sweets</h1>
      
        <i
          className="fas fa-shopping-cart carrito_icon pointer"
          onClick={handleCarritoOpen}
        >
          {cantidad}
        </i>
     

      <div className="grid_products">
        {sweets.map((sweet) => (
          <ProductsScreen key={sweet.id} {...sweet} />
        ))}
      </div>
    </div>
  );
}
