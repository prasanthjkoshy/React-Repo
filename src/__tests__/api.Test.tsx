import axios from "axios";
import { fetchProducts } from '../services/ProductsApiService';

describe("fetchProducts", () => {
  describe("when API call is successful", () => {
    it("should return products list", async () => {
      const result = await fetchProducts();
      expect(result.length).toEqual(931);
      expect(result[10].name).toEqual('B Smudged');
    });
  });

  describe("when API call fails", () => {
    it("should return empty product list", async () => {
      const message = "Network Error";
      (axios as unknown as jest.Mock).mockRejectedValueOnce(new Error(message));
      const result = await fetchProducts();
      expect(result).toEqual([]);
    });
  });
});