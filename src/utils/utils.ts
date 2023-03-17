import axios from "axios";

export const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products.json";

export const fetchProducts = async () => {
  try {
    return await axios.get(`${BASE_URL}/`);
  } catch (e) {
    return [];
  }
};