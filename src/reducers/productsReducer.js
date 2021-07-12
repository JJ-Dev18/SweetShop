
import {types} from '../types/types'  
const initialState = {
  sweets: [],
  open : true
}

export const productsReducer = (state = initialState , action) => {
  // console.log(action.payload); 
  switch (action.type) {
    case types.loadedProducts:
      return{
        ...state,
        sweets : [...action.payload]
      };
    case types.openProducts : 
    return{
      ...state,
      open : !state.open
    }  
      
     
  
    default:
      return state;
  }
}