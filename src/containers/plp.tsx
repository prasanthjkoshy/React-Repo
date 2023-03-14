import {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./productComponent";
import { fetchProducts } from '../redux/actions/productActions';
const PLP = () => {
    const products = useSelector((state :any) => state.allproducts.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch<any>(fetchProducts());
    }, []);
    console.log("Products: ", products);
    return(
        <div className="">
            <ProductComponent />
        </div>
    )
}
export default PLP;