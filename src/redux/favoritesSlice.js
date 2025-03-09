import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    songs: [],
  },
  reducers: {
    // Reducer pour ajouter une chanson aux favoris
    addFavorite: (state, action) => {
      state.songs.push(action.payload); // Ajoute la chanson à la liste
    },
    // Reducer pour retirer une chanson des favoris
    removeFavorite: (state, action) => {
      state.songs = state.songs.filter((song) => song.trackId !== action.payload); // Filtre la liste pour retirer la chanson
    },
  },
});

// On exporte les actions pour pouvoir les utiliser dans les composants
export const { addFavorite, removeFavorite } = favoritesSlice.actions;

// On exporte le reducer pour l'ajouter au store
export default favoritesSlice.reducer;