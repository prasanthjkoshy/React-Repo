import { Box, Paper, CardContent, Typography, CardMedia, IconButton, Link } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const ProductCard = ({ product }) => {
    return(<Paper className="four column wide" component="div" key={product.id} data-testid="productData" sx={{paddingLeft: 1.5}}>
<Link underline='none' href={product.product_link} target="_blank">
    <Box className="ui link cards" sx={{ padding: '10px', float: 'left', overflow: 'none' }}>
        <CardContent className="card content">
            <CardMedia
                sx={{width: 290,height: 290}}
                component="img"
                image={product.api_featured_image}
                alt={product.name}
                title="Click to View Product Page"
            />
            <Typography component="div" variant="h5"
                sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                title={product.name}>
                {product.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div" className="meta price">
                {product.price_sign} {product.price}
            </Typography>
            <IconButton href="#" onClick={() => alert('Added item to Bag')}>
                <ShoppingBagIcon sx={{ height: 35, width: 35 }} />
            </IconButton>
        </CardContent>
    </Box>
</Link>
</Paper>);
}

export default ProductCard;