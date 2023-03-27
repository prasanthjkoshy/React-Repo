import { useAppSelector } from '../../../app/dispatchSelectorHook'
import { getAllProducts } from '../productsSlice';
import { Box } from '@mui/material';
import ProductCard from './ProductCard';

const ProductsGrid = ({ search, offset }) => {

    const products = useAppSelector(getAllProducts);
    return (
        products.length > 0 ?
            products
                .filter(item => item.price !== null)
                .filter((product) => {
                    return search.toLowerCase() === '' ? product : product.name.toLowerCase().includes(search)
                }).length > 0 ? products
                    .filter(item => item.price !== null)
                    .filter((product) => {
                        return search.toLowerCase() === '' ? product : product.name.toLowerCase().includes(search)
                    })
                    .sort((a, b) => a.price > b.price ? 1 : -1)
                    .slice(0, offset)
                    .map((product) => {
                        return (
                            <ProductCard product={product} />
                        );
                    }) :
                <Box component="img" src="https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result_still_2x.gif?compress=1&resize=700x400" alt='NoData' />
            : <Box component="img" src="https://cdn.dribbble.com/users/93144/screenshots/2348873/media/6cfd6933505bcd4e608c664ccae6bdd5.gif" sx={{ width: 450, height: 450 }} alt='Loader' />

    );
};

export default ProductsGrid;