import { useEffect } from 'react';
import { useAppDispatch } from '../../../app/dispatchSelectorHook';
import ProductsInfiniteScroll from "./ProductsInfiniteScroll";
import { fetchProducts } from '../productsSlice';
const ProductListingPage = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <ProductsInfiniteScroll />
    )
}
export default ProductListingPage;