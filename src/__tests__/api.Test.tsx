import axios from "axios";

import { BASE_URL, fetchProducts } from "../utils/utils"

jest.mock("axios");

describe("fetchProducts", () => {
  describe("when API call is successful", () => {
    it("should return users list", async () => {
      // given
      const products = [
        { id: 1, name: "John" },
        { id: 2, name: "Andrew" },
      ];
      (axios as unknown as jest.Mock).mockResolvedValueOnce(products);

      // when
      const result = await fetchProducts();

      // then
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}`);
      expect(result).toEqual(products);
    });
  });

  describe("when API call fails", () => {
    it("should return empty users list", async () => {
      // given
      const message = "Network Error";
      (axios as unknown as jest.Mock).mockRejectedValueOnce(new Error(message));

      // when
      const result = await fetchProducts();

      // then
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}`);
      expect(result).toEqual([]);
    });
  });
});