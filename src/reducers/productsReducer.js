
import {types} from '../types/types'  
const initialState = {
  sweets: []
}

export const productsReducer = (state = initialState , action) => {
  // console.log(action.payload); 
  switch (action.type) {
    case types.loadedProducts:
      return{
        sweets : [...action.payload]
      };
      
     
  
    default:
      return state;
  }
}