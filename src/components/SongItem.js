// components/SongItem.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';

const SongItem = ({ song }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.songs);
  const isFavorite = favorites.some((fav) => fav.trackId === song.trackId);
  const [rating, setRating] = useState(song.userRating || 0); // Note actuelle (0-5)

  const handleFavoritePress = () => {
    if (isFavorite) {
      dispatch(removeFavorite(song.trackId));
    } else {
      dispatch(addFavorite({ ...song, userRating: rating }));
    }
  };

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
    // Met à jour la chanson dans les favoris si elle y est déjà
    if (isFavorite) {
      dispatch(removeFavorite(song.trackId));
      dispatch(addFavorite({ ...song, userRating: selectedRating }));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.songInfo}>
        <Text style={styles.trackName}>{song.trackName}</Text>
        <Text style={styles.artistName}>{song.artistName}</Text>
      </View>
      
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={handleFavoritePress} style={styles.iconButton}>
          <Icon name={isFavorite ? 'heart' : 'heart-o'} size={24} color="red" />
        </TouchableOpacity>
        
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => handleRating(star)} activeOpacity={0.6} >
              <Icon name={star <= rating ? 'star' : 'star-o'} size={20} color="gold" style={styles.star}/>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  songInfo: {
    marginBottom: 8,
  },
  trackName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  artistName: {
    fontSize: 14,
    color: '#666',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  star: {
    marginHorizontal: 2,
  },
  iconButton: {
    padding: 4,
  },
});

export default SongItem;