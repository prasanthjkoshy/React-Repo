import axios from 'axios';

export const fetchAllProducts = async () => {
    try {
        const response = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}