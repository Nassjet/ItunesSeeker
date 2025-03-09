// components/SearchBar.js
import React from 'react';
import { TextInput, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const SearchBar = ({ placeholder, value, onChangeText, onPress, buttonText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    alignItems: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 8,
    marginTop:8, 
    maxWidth: '100%',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width : '80%'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SearchBar;