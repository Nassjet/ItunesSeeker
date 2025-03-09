import { configureStore } from '@reduxjs/toolkit';
import favoritesReducers from './favoritesSlice';
export const store = configureStore({
  reducer: {
    favorites: favoritesReducers,
  },
});