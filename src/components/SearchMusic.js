  // components/SearchMusic.js
  import React, { useState } from 'react';
  import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
  import SearchBar from '../components/SearchBar';
  import SongItem from '../components/SongItem';
  import styles from '../styles/SearchMusicStyle';
  import Icon from 'react-native-vector-icons/FontAwesome';


  const SearchMusic = ({ navigation }) => { 
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
        // console.log("Data:" + data)
        // if (data == []) {
        // }
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
      <View style={styles.container}>
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


        <TouchableOpacity
          style={styles.favoritesButton}
          onPress={() => navigation.navigate('FavoritesScreen')} 
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="heart" size={20} color="#fff" style={{ marginRight: 8 }} />
            <Text style={styles.favoritesButtonText}>Voir les favoris</Text>
          </View>
        </TouchableOpacity>

        <FlatList
          data={searchType === 'artist' ? resultsArtist : resultsMusic}
          keyExtractor={(item) => item.trackId.toString()}
          renderItem={({ item }) => <SongItem song={item} />}
        />
      </View>
    );
  };



  export default SearchMusic;