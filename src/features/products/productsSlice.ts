import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productDataState } from '../../types/app.types';
import { fetchAllProducts } from '../../services/ProductsApiService';
import { State } from '../../app/store';

export const fetchProducts: any = createAsyncThunk(
    'projects/fetchProducts', async (_, { dispatch }) => {
        const responseData = await fetchAllProducts();
        console.log(responseData);
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