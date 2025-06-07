import {configureStore} from '@reduxjs/toolkit';
import productsDataSlice from './Slices/productsDataSlice';
const store = configureStore({
  reducer: {
    productsData: productsDataSlice,
  },
});

export default store;
