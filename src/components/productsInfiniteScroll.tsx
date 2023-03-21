import '../styles/products.scss'
import { useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import SearchButton from './searchButton';
import ProductsGrid from './productsGrid';

const ProductCard = () => {
    const [search, setSearch] = useState('');
    const [offset, setOffset] = useState(12);;

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
            <SearchButton setOffset={setOffset} setSearch={setSearch} />
            {<ProductsGrid search={search} offset={offset} />}

        </InfiniteScroll>
    return <>{renderList}</>;
};
export default ProductCard;