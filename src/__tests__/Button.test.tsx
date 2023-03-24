import { render, screen, cleanup } from "@testing-library/react";
// Importing the jest testing library
import '@testing-library/jest-dom'
import SearchButton from "../features/products/components/SearchButton";
  
afterEach(() => {
    cleanup(); 
})
  
describe("Search Component" ,() => {
    
    render(<SearchButton setOffset="12" setSearch ="perfume"/>); 
    const search = screen.getByTestId("form"); 
      
    // Test 1
    test("Form Rendering", () => {
        expect(search).toBeInTheDocument(); 
    })
  
    // Test 2 
    test("Search PlaceholderText", () => {
        screen.queryByPlaceholderText(/Search here for Products.../i); 
    })
})