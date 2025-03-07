const Results = () => {
  return(
    <FlatList
    data={results}
    keyExtractor={(item) => item.trackId.toString()}
    renderItem={({ item }) => (
    <View style={styles.resultItem}>
      <Text style={styles.trackName}>{item.trackName}</Text>
      <Text style={styles.artistName}>{item.artistName}</Text>
    </View>
  )}
  />
  )
}