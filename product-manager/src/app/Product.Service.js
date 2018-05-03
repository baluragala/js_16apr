import Product from "./Product.js";
import axios from "axios";

const URI = "http://localhost:3000";
class ProductService {
  async getProducts() {
    let response = await axios.get(`${URI}/products`);
    return response.data;
  }

  async saveProduct(product) {
    let response = await axios.post(`${URI}/products`, product);
    return response;
  }

  async updateProduct(id, product) {
    let response = await axios.put(`${URI}/products/${id}`, product);
    return response;
  }

  async deleteProduct(id) {
    let response = await axios.delete(`${URI}/products/${id}`);
    return response;
  }
}

export default ProductService;
