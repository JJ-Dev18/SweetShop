
import {types } from '../types/types'

const initialState = {
  open : false,
  cantidad : 0,
  total:0,
  sweets : []
}

export const carritoReducer = (state=initialState,action) => {
    //  console.log(action.payload)
     switch (action.type) {
       case types.openCarrito:
         return{
           ...state,
           open : action.payload
         }
       case types.closeCarrito:
         return{
           ...state,
           open : action.payload
         }  
       case types.addSweetCarro:
         return {
           ...state,
           cantidad: action.payload.cantidadSweet,
           sweets: [...state.sweets, action.payload.sweet],
         };
       case types.addCantidadSweet:
         return{
           ...state,
            sweets: state.sweets.map( sweet => 
              (sweet.id === action.payload.id) ? action.payload.sweet : sweet 
            )
            
         }  ;
       case types.deleteSweet : 
       return{
         ...state,
         sweets : state.sweets.filter(sweet => 
          (sweet.id !== action.payload)
          ),
          cantidad : state.cantidad - 1 
       }  
       case types.totalCarro : 
       return{
         ...state,
         total: action.payload
       } 
       case types.comprarCarro:
         return {
           ...state,
           total : 0,
           cantidad: 0,
           sweets : action.payload
         }       
       default:
         return state;
         
     }
}