  import {types} from '../types/types'

  const initialstate = {
     compras : [ ],
     cantidad: 0
  }

  export const historialReducer = (state = initialstate,action) => {
    
    switch (action.type) {
       case types.setHistory:
         return{
           ...state,
           compras : action.payload,     
         };
      case types.newCantidadHistory : 
        return{
           ...state,
           cantidad :action.payload
        }
      case types.loadCantidadHistory:
        return{
          ...state,
          cantidad: action.payload
        }  
      
      default:
        return state;
    }

  }