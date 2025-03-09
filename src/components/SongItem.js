// components/SongItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SongItem = ({ trackName, artistName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.trackName}>{trackName}</Text>
      <Text style={styles.artistName}>{artistName}</Text>
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