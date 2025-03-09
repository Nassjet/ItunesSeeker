import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import SongItem from '../components/SongItem';
import styles from '../styles/SearchMusicStyle';

const SearchMusic = () => {
  const [searchQueryArtist, setSearchQueryArtist] = useState('');
  const [searchQueryMusic, setSearchQueryMusic] = useState('');
  const [resultsArtist, setResultsArtist] = useState([]);
  const [resultsMusic, setResultsMusic] = useState([]);
  const [searchType, setSearchType] = useState(null);

  const searchResultsArtist = async () => {
    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(searchQueryArtist)}&media=music`
      );
      const data = await response.json();
      setResultsArtist(data.results);
      setSearchType('artist');
    } catch (error) {
      console.log('Erreur API:', error);
    }
  };

  const searchResultsMusic = async () => {
    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(searchQueryMusic)}&media=music`
      );
      const data = await response.json();
      setResultsMusic(data.results);
      setSearchType('music');
    } catch (error) {
      console.log('Erreur API:', error);
    }
  };

  return (
    <View>
      <SearchBar
        placeholder="Rechercher un artiste"
        value={searchQueryArtist}
        onChangeText={setSearchQueryArtist}
        onPress={searchResultsArtist}
        buttonText="Rechercher un artiste"
      />
      <SearchBar
        placeholder="Rechercher une musique"
        value={searchQueryMusic}
        onChangeText={setSearchQueryMusic}
        onPress={searchResultsMusic}
        buttonText="Rechercher une musique"
      />
      <FlatList
        data={searchType === 'artist' ? resultsArtist : resultsMusic}
        keyExtractor={(item) => item.trackId.toString()}
        renderItem={({ item }) => (
          <SongItem trackName={item.trackName} artistName={item.artistName} />
        )}
      />
    </View>
  );
};

export default SearchMusic;