import { createSlice } from '@reduxjs/toolkit';
import { productDataState } from '../../types/app.types';

const initialState: productDataState = {
    products: []
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts: (state, { payload }) => {
            state.products = payload
        },
    },
});
export const { addProducts } = productSlice.actions;
export const getAllProducts = (state) => state.products.products;
export default productSlice.reducer;