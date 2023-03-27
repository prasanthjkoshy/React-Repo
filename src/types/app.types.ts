
export type productDataState = {
    products: []
    loading: 'idle' | 'succeeded'
};

export type product = {
    id: number, 
    brand: string, 
    name: string, 
    price: string, 
    price_sign: string, 
    currency: string, 
    image_link: string,
    website_link: string, 
    product_api_url: string, 
    api_featured_image : string,
    product_link : string,
};