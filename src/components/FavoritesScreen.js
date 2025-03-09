import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import SongItem from './SongItem';

const FavoritesScreen = () => {
  const favorites = useSelector((state) => state.favorites.songs); // Lit les favoris depuis le store

  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.trackId.toString()}
          renderItem={({ item }) => <SongItem song={item} />}
        />
      ) : (
        <Text style={styles.emptyText}>Aucun favori pour le moment.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#666',
    marginTop: 20,
  },
});

export default FavoritesScreen;