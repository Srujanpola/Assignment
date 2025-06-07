import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    products: []
};

const productsDataSlice = createSlice({
  name: 'productsData',
  initialState: initialState,
  reducers: {
    setProductsData: (state, action) => {
      state.products = [...state.products, ...action.payload];
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        value => value.id != action.payload.id,
      );
     
    },
  },
});

export const {setProductsData, getProductsData} = productsDataSlice.actions;
export default productsDataSlice.reducer;
