import axios from "axios";

export const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products.json";

export const fetchProducts = async () => {
    try {
        return await axios.get(`${BASE_URL}/`);
    } catch (e) {
        return [];
    }
};

export const getMockedProducts = () => {
    return {
        "resultCount": 5,
        "results": [
            { 
                "id": 1038, 
                "brand": "sally b's skin yummies", 
                "name": "B Smudged", 
                "price": "20", 
                "price_sign": "$", 
                "currency": "USD", 
                "image_link": "https://www.purpicks.com/wp-content/uploads/2018/06/Sally-B_s-Skin-Yummies-B-Smudged-1.jpg", "product_link": "https://www.purpicks.com/product/sally-bs-skin-yummies-b-smudged/",
                "website_link": "https://purpicks.com/", 
                "description": "Let your eyes naturally pop with our B Smudged, a subtle eye color that adds a tint of color to the base of your lashes. An organic, cream eye color, B Smudged eliminates the inevitable uneven line from traditional eyeliners, and does not require expert blending techniques of messy, powder-based shadows. Simply 'smudge' along lash line for color that stays in place for a long lasting look.", 
                "rating": null, 
                "category": "", 
                "product_type": "eyeshadow", 
                "tag_list": ["EWG Verified", "purpicks"], 
                "created_at": "2018-06-30T19:19:32.132Z", 
                "updated_at": "2018-09-02T22:52:06.697Z", 
                "product_api_url": "http://makeup-api.herokuapp.com/api/v1/products/1038.json", 
                "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/038/original/open-uri20180630-4-xhqdne?1530390385", 
                "product_colors": [{ "hex_value": "#485376", "colour_name": "B smudged" }] 
            },
            { 
                "id": 1039, 
                "brand": "Mineral Blush", 
                "name": "Mineral Blush", 
                "price": "12", 
                "price_sign": "$", 
                "currency": "USD", 
                "image_link": "https://www.purpicks.com/wp-content/uploads/2018/06/Sally-B_s-Skin-Yummies-B-Smudged-1.jpg", "product_link": "https://www.purpicks.com/product/sally-bs-skin-yummies-b-smudged/",
                "website_link": "https://purpicks.com/", 
                "description": "Let your eyes naturally pop with our B Smudged, a subtle eye color that adds a tint of color to the base of your lashes. An organic, cream eye color, B Smudged eliminates the inevitable uneven line from traditional eyeliners, and does not require expert blending techniques of messy, powder-based shadows. Simply 'smudge' along lash line for color that stays in place for a long lasting look.", 
                "rating": null, 
                "category": "", 
                "product_type": "eyeshadow", 
                "tag_list": ["EWG Verified", "purpicks"], 
                "created_at": "2018-06-30T19:19:32.132Z", 
                "updated_at": "2018-09-02T22:52:06.697Z", 
                "product_api_url": "http://makeup-api.herokuapp.com/api/v1/products/1038.json", 
                "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/038/original/open-uri20180630-4-xhqdne?1530390385", 
                "product_colors": [{ "hex_value": "#485376", "colour_name": "B smudged" }] 
            }
        ]
    };
};