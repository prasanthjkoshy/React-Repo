import { ActionTypes } from "../constants/action-types";
import sampleApiService from "../../services/sampleApiService";

export const fetchProducts = () => async function (dispatch) {
    const response = await sampleApiService.get("");
    dispatch({
        type: ActionTypes.FETCH_PRODUCTS,
        payload: response.data
    })
};