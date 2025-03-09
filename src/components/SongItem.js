// components/SongItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';

const SongItem = ({ song }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.songs); // Lit les favoris depuis le store
  const isFavorite = favorites.some((fav) => fav.trackId === song.trackId); // Vérifie si la chanson est favorite

  const handleFavoritePress = () => {
    if (isFavorite) {
      dispatch(removeFavorite(song.trackId)); // Retire la chanson des favoris
    } else {
      dispatch(addFavorite(song)); // Ajoute la chanson aux favoris
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.trackName}>{song.trackName}</Text>
      <Text style={styles.artistName}>{song.artistName}</Text>
      <TouchableOpacity onPress={handleFavoritePress}>
        <Icon name={isFavorite ? 'star' : 'star-o'} size={24} color="gold" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  trackName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  artistName: {
    fontSize: 14,
    color: '#666',
  },
});

export default SongItem;