import { addProducts } from "../features/products/productsSlice";
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts: any = createAsyncThunk(
    'projects/fetchProducts', async (_, { dispatch }) => {
        const response = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json");
        console.log(response.data);
        dispatch(addProducts(response.data))
    });