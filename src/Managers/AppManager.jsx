import axios from 'axios';
import {baseUrl} from '../useFullFiles/ApiUrl';
class AppManager {
  constructor() {
    this._app = null;
  }

  async getAllProducts() {
    try {
      const productsResponse = await axios.get(baseUrl);
      console.log('get products response', productsResponse);
      if (productsResponse.status === 200) {
        return productsResponse.data;
      }
    } catch (error) {
      console.log('get products response error', error.message);
    }
  }

  async deleteProductById(id) {
    try {
      const deleteProductResponse = await axios.delete(`${baseUrl}/${id}`);
      console.log('deleteProductResponse response', deleteProductResponse);
      if (deleteProductResponse.status === 200) {
        return true;
      }
    } catch (error) {
      console.log('delete Product Response  error', error.message);
    }
  }

  async getProductDetail(id) {
    try {
      const productDetailResponse = await axios.delete(`${baseUrl}/${id}`);
      //console.log('productDetail response', productDetailResponse);
      if (productDetailResponse.status === 200) {
        return productDetailResponse.data;
      }
    } catch (error) {
      console.log('product Detail Response', error.message);
    }
  }
}

const appMngr = new AppManager();
export default appMngr;
