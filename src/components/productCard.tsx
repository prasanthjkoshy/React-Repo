import '../layouts/products.scss'
import { useState, useRef } from "react";
import styled from "styled-components";
import { useAppSelector } from '../hooks/dispathSelectorHook'
import InfiniteScroll from 'react-infinite-scroll-component';
import { getAllProducts } from '../features/products/productsSlice';
import { Box, Paper, CardContent, Typography, CardMedia, IconButton, Link } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Form: styled.form = styled.form`
width: ${props => (props.barOpened ? "30rem" : "2rem")};
cursor: ${props => (props.barOpened ? "auto" : "pointer")};
`;
const Input: styled.input = styled.input`
  margin-left: ${props => (props.barOpened ? "1rem" : "0rem")};
`;

const StyledButton: styled.button = styled.button`
  pointer-events: ${props => (props.barOpened ? "auto" : "none")};
  cursor: ${props => (props.barOpened ? "pointer" : "none")};
`;

const ProductCard = () => {
    const products = useAppSelector(getAllProducts);
    const [search, setSearch] = useState('');
    const [offset, setOffset] = useState(12);
    const [barOpened, setBarOpened] = useState(false);
    const formRef = useRef();
    const inputFocus = useRef<HTMLInputElement>(null);


    const fetchMoreData = () => {
        setTimeout(() => {
            setOffset(offset => offset + 8);
        }, 500);
    };

    const renderList =
        <InfiniteScroll
            dataLength={offset}
            next={fetchMoreData}
            hasMore={true} loader
        >

            
                <Form barOpened={barOpened}
                    onClick={() => {
                        // When form clicked, set state of baropened to true and focus the input
                        setBarOpened(true);
                        inputFocus.current && inputFocus.current.focus();

                    }}
                    // on focus open search bar
                    onFocus={() => {
                        setBarOpened(true);
                        inputFocus.current && inputFocus.current.focus();
                    }}
                    // on blur close search bar
                    onBlur={() => {
                        setBarOpened(false);
                    }}

                    ref={formRef}>
                    <div className='searchDiv'> <StyledButton type="submit" barOpened={barOpened}>
                        <i className="search icon"></i>
                    </StyledButton>
                        <Input
                            ref={inputFocus}
                            placeholder="Search here for Products... "
                            onChange={(e) => { setSearch(e.target.value); setOffset(12); }}
                        /></div>
                </Form>
            {products.length > 0 ?

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
                                <Paper  className="four column wide" component="div" key={id} >
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
                        }) : <div><img src="https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result_still_2x.gif?compress=1&resize=700x400" className="" alt='Loader' /></div>
                : <div><img src="https://cdn.dribbble.com/users/93144/screenshots/2348873/media/6cfd6933505bcd4e608c664ccae6bdd5.gif" className="img-loader" alt='Loader' /></div>
            }

        </InfiniteScroll>
    return <>{renderList}</>;
};
export default ProductCard;