
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer
    }
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;