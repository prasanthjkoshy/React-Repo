import '../App.css'
import { useState } from "react";
import { useSelector } from "react-redux";
import InfiniteScroll from 'react-infinite-scroll-component';
const ProductComponent = () => {
    const products = useSelector((state: any) => state.allproducts.products);
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
                    <input className="prompt" type="text" placeholder="Search here for Products... " onChange={(e) => {setSearch(e.target.value); setOffset(12);}}/>
                    <i className="search icon"></i>
                </div></div>
            {products.length > 0 ?

                products
                    .filter((product) => {
                        return search.toLowerCase() === '' ? product : product.name.toLowerCase().includes(search)
                    })
                    .filter(item => item.price !== null)
                    .sort((a, b) => a.price > b.price ? 1 : -1)
                    .slice(0, offset)
                    .map((product) => {
                        const { id, price, name, price_sign, api_featured_image } = product;
                        return (
                            <div className="four column wide" key={id}>
                                <div className="ui link cards">
                                    <div className="card">
                                        <div className="image">
                                            <img src={api_featured_image} alt={name} className="img-dim" title={name}/>
                                        </div>
                                        <div className="content">
                                            <div className="header" title={name}>{name}</div>
                                            <div className="meta price">{price_sign} {price}</div>
                                            <div><img src="https://cdn-icons-png.flaticon.com/512/70/70021.png" onClick={() => alert('Added item to Bag')} alt={name} className="img-cart" title="Add To Cart"/></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                : <div ><img src="https://cdn.dribbble.com/users/93144/screenshots/2348873/media/6cfd6933505bcd4e608c664ccae6bdd5.gif" className="img-loader" /></div>
            }

        </InfiniteScroll>
    return <>{renderList}</>;
};
export default ProductComponent;