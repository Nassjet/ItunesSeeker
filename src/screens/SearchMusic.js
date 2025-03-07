import React, { useState } from "react";
import { Button, TextInput, TouchableOpacity, View, Text,FlatList } from "react-native";
import styles from '../styles/SearchMusicStyle'; 



const SearchMusic = () => {
    const [searchQueryArtist,setSearchQueryArtist] = useState("");
    const [searchQueryMusic,setSearchQueryMusic] = useState("");

    const [resultsArtist,setResultsArtist] = useState([]);
    const [resultsMusic,setResultsMusic] = useState([]);

    const [searchType, setSearchType] = useState(null); // null, 'artist', ou 'music'


    async function searchResultsArtist() {
        try {
          const response = await fetch(
            `https://itunes.apple.com/search?term=${encodeURIComponent(searchQueryArtist)}&media=music`
          );
          const data = await response.json();
          setResultsArtist(data.results); 
          setSearchType('artist');
        } catch (error) {
          console.log("Erreur API:", error);
        }
      }
      
      async function searchResultsMusic() {
        try {
          const response = await fetch(
            `https://itunes.apple.com/search?term=${encodeURIComponent(searchQueryMusic)}&media=music`
          );
          const data = await response.json();
          setResultsMusic(data.results); 
          setSearchType('music');
        } catch (error) {
          console.log("Erreur API:", error);
        }
      }


    return (
        <View>
            <TextInput placeholder="Rechercher un artiste"
            placeholderTextColor="#999"
            value={searchQueryArtist}
            onChangeText={setSearchQueryArtist}
            style={styles.input}></TextInput>
            <TouchableOpacity style={styles.button} onPress={searchResultsArtist}>
                <Text style={styles.buttonText}>Rechercher</Text>
            </TouchableOpacity>
            <TextInput placeholder="Rechercher une musique"
            placeholderTextColor="#999"
            value={searchQueryMusic}
            onChangeText={setSearchQueryMusic} 
            style={styles.input}></TextInput>
            <TouchableOpacity style={styles.button} onPress={searchResultsMusic}>
                <Text style={styles.buttonText}>Rechercher</Text>
            </TouchableOpacity>
            <FlatList
            data={searchType === 'artist' ? resultsArtist : resultsMusic} // Conditionne les données
            keyExtractor={(item) => item.trackId.toString()}
            renderItem={({ item }) => (
            <View style={styles.resultItem}>
                <Text style={styles.trackName}>{item.trackName}</Text>
                <Text style={styles.artistName}>{item.artistName}</Text>
            </View>
            )}
            />
        </View>
    )
}

export default SearchMusic; 