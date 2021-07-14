import {types} from '../types/types'
import {loadProducts} from '../helpers/loadProducts'

export const startLoadProducts = () => {

   return async (dispatch) => {
      const products = await loadProducts()
      dispatch(loadingProducts(products))
      
   }
}

export const loadingProducts = (products) => ({

    type: types.loadedProducts,
    payload: products
})

export const openProducts = () => ({
   type: types.openProducts
})