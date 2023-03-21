import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/dispatchSelectorHook';
import ProductCard from "../../components/productsInfiniteScroll";
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