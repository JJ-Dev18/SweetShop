import React from 'react'
import { AppRouter } from "./routes/AppRouter";
import { Provider } from "react-redux";
import { store } from './store/store';

export const SweetShop = () => {
  return (
    <Provider store={store}>
       <AppRouter/>
    </Provider>
  )
}
