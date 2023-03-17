import axios from "axios";

import { BASE_URL, fetchProducts, getMockedProducts } from "../utils/utils"

jest.mock("axios");

describe("fetchProducts", () => {
  describe("when API call is successful", () => {
    it("should return users list", async () => {
      // given
      const resp = { data: getMockedProducts() };
      (axios as unknown as jest.Mock).mockResolvedValueOnce(resp);

      // when
      const result = await fetchProducts();
      // then
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}`);
      expect(result).toEqual(resp);
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