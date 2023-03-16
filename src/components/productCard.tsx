import '../layouts/products.scss'
import { useState } from "react";
import { useAppSelector } from '../hooks/dispathSelectorHook'
import InfiniteScroll from 'react-infinite-scroll-component';
import { getAllProducts } from '../features/products/productsSlice';
const ProductCard = () => {
    const products = useAppSelector(getAllProducts);
    console.log(products);
    const [search, setSearch] = useState('');
    const [offset, setOffset] = useState(12);

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
            <div className="search-box ui search">
                <div className="ui icon input">
                    <input className="prompt" type="text" placeholder="Search here for Products... " onChange={(e) => { setSearch(e.target.value); setOffset(12); }} />
                    <i className="search icon"></i>
                </div></div>
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
                            const { id, price, name, price_sign, api_featured_image } = product;
                            return (
                                <div className="four column wide" key={id}>
                                    <div className="ui link cards">
                                        <div className="card">
                                            <div className="image">
                                                <img src={api_featured_image} alt={name} className="img-dim" title={name} />
                                            </div>
                                            <div className="content">
                                                <div className="header" title={name}>{name}</div>
                                                <div className="meta price">{price_sign} {price}</div>
                                                <div><img src="https://cdn-icons-png.flaticon.com/512/70/70021.png" onClick={() => alert('Added item to Bag')} alt={name} className="img-cart" title="Add To Cart" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }) : <div><img src="https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result_still_2x.gif?compress=1&resize=700x400" className="" alt='Loader' /></div>
                : <div><img src="https://cdn.dribbble.com/users/93144/screenshots/2348873/media/6cfd6933505bcd4e608c664ccae6bdd5.gif" className="img-loader" alt='Loader' /></div>
            }

        </InfiniteScroll>
    return <>{renderList}</>;
};
export default ProductCard;