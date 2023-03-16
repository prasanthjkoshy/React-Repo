
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice'


const store = configureStore({
    reducer: {
        products: productsReducer
    }
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;