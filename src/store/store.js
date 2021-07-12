import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from "redux-thunk";
import { uiReducer } from "../reducers/uiRedcer";
import { carritoReducer } from "../reducers/carritoReducer";
import { productsReducer } from "../reducers/productsReducer";
import { historialReducer } from "../reducers/historialReducer";
import { menuReducer } from "../reducers/menuReducer";
// import { notesReducer } from "../reducers/notesReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  product: productsReducer,
  carrito: carritoReducer,
  history : historialReducer,
  menu: menuReducer
  // notes: notesReducer,
});
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
