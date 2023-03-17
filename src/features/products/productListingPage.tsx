import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/dispathSelectorHook';
import ProductCard from "../../components/productCard";
import { fetchProducts } from '../../services/ProductsApiService';
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