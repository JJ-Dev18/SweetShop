import {types} from '../types/types'

const initialState = {
  open : false
}

export const menuReducer = (state = initialState,action) => {

  switch (action.type) {
    case types.openMenu:
      return{
        open : !state.open
      }
    // case types.closeMenu:
    //   return{
    //     open:false
    //   }  
  
    default:
      return state;
  }
}