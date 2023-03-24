import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productDataState } from '../../types/app.types';
import { fetchAllProducts } from './services/ProductsApi';

export const fetchProducts: any = createAsyncThunk(
    'projects/fetchProducts', async () => {
        const responseData = await fetchAllProducts();
        return responseData;
    });

export const initialState: productDataState = {
    products: [],
    loading: 'idle',
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = 'succeeded'
        })
    },
});

export const getAllProducts = (state) => state.products.products;
export default productSlice.reducer;