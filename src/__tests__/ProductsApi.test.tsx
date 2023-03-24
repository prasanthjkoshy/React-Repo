import axios from "axios";
import { fetchAllProducts } from '../features/products/services/ProductsApi';
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup(); 
})

jest.mock('axios', () => {
  return {
    get: jest.fn()
  };
});

describe("fetchProducts", () => {

  describe("when API call is successful", () => {
    it("should return products list", async () => {
      const testProduct = { id: 1, brand: "pure anada", name: "Pure Anada Natural Mascara", price: "14.0" };
      jest.spyOn(axios, "get").mockResolvedValue({
        data: [
          testProduct,
        ],
      });

      const data = await fetchAllProducts();
      expect(data).toEqual([testProduct]);
      expect(data.length).toEqual(1);
    });
  });

  describe("when API response is empty", () => {
    it("should return empty product list", async () => {
      jest.spyOn(axios, "get").mockResolvedValue({
        data: [],
      });
      const result = await fetchAllProducts();
      expect(result).toEqual([]);
    });
  });
});