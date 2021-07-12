  import {types} from '../types/types'

  const initialstate = {
     compras : [ ],
     open: false,
     cantidad: 0
  }

  export const historialReducer = (state = initialstate,action) => {
    
    switch (action.type) {
       case types.setHistory:
         return{
           ...state,
           compras : [...action.payload],
           
         };
       case types.openHistory:
         return{
           ...state,
           open : !state.open
         }
      case types.newCantidadHistory : 
        return{
           ...state,
           cantidad :action.payload
        }
      
      default:
        return state;
    }

  }