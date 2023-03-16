import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/dispathSelectorHook';
import ProductCard from "./productCard";
import { fetchProducts } from '../features/products/productActions';
import { getAllProducts } from '../features/products/productsSlice';
const PLP = () => {
    const products = useAppSelector(getAllProducts);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    console.log("Products: ", products);
    return (
        <div>
            <ProductCard />
        </div>
    )
}
export default PLP;