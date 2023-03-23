import { useAppSelector } from '../../../app/dispatchSelectorHook'
import { getAllProducts } from '../productsSlice';
import { Box, Paper, CardContent, Typography, CardMedia, IconButton, Link } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
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
                        const { id, price, name, price_sign, api_featured_image, product_link } = product;
                        return (
                            <Paper className="four column wide" component="div" key={id} >
                                <Link underline='none' href={product_link} target="_blank">
                                    <Box className="ui link cards">
                                        <CardContent className="card content">
                                            <CardMedia
                                                className="image"
                                                component="img"
                                                image={api_featured_image}
                                                alt={name}
                                                title="Click to View Product Page"
                                            />
                                            <Typography component="div" variant="h5" className="header" title={name}>
                                                {name}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary" component="div" className="meta price">
                                                {price_sign} {price}
                                            </Typography>
                                            <IconButton aria-label="play/pause" href="#" onClick={() => alert('Added item to Bag')}>
                                                <ShoppingBagIcon sx={{ height: 35, width: 35 }} />
                                            </IconButton>
                                        </CardContent>
                                    </Box>
                                </Link>
                            </Paper>
                        );
                    }) :
                <div><img src="https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result_still_2x.gif?compress=1&resize=700x400" className="" alt='Loader' /></div>
            : <div><img src="https://cdn.dribbble.com/users/93144/screenshots/2348873/media/6cfd6933505bcd4e608c664ccae6bdd5.gif" className="img-loader" alt='Loader' /></div>

    );
};

export default ProductsGrid;