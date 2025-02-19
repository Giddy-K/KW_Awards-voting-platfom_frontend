import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './slices/dashbardSlice';

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});

export default store;