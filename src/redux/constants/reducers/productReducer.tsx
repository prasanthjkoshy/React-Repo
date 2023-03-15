import { ActionTypes } from "../action-types";
const initialState = {
    products: [],
};
export const prodReducer = (state = initialState, {type, payload}) => {
switch (type) {
        case ActionTypes.FETCH_PRODUCTS:
            return {...state, products:payload};
        default :
        return state;

}
};