import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/dispathSelectorHook';
import ProductCard from "./productCard";
import { fetchProducts } from '../features/products/productActions';
const ProductListingPage = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
            <ProductCard />
    )
}
export default ProductListingPage;