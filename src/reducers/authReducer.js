import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  //  console.log(action.payload)
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
        photoURL: action.payload.photoURL,
        
      };

    case types.loggout:
      return {};
    default:
      return state;
  }
};
