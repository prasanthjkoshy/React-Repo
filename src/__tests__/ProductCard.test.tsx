import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import ProductCard from "../features/products/components/ProductCard";
  
afterEach(() => {
    cleanup(); 
})

describe("ProductCard Component" ,() => {
    const testProduct = { id: '1', brand: "pure anada", name: "Pure Anada Natural Mascara", price: "14.0", price_sign:"$", product_link:"https://well.ca/products/pure-anada-natural-mascara_83255.html", api_featured_image:"//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/001/original/data?1514061104"};
    test("Product Rendering", () => {
        const layout = render(<ProductCard product={{testProduct}}/>); 
        const productDetail = layout.getByTestId("productData"); 
        expect(productDetail).toBeInTheDocument(); 
        expect(layout.findAllByText(/pure anada/)).toBeTruthy();
        expect(layout.findAllByText(/14.0/)).toBeTruthy();
    })
  
})

