import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";
import Colors from "../../utils/Colors";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [selectedCoordinates, setSelectedCoordinates] = useState(null);

  const handleSearch = async (text) => {
    setSearchTerm(text);
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${text}&format=json`
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  const handleSelectPlace = (selectedItem) => {
    const latitude = parseFloat(selectedItem.lat);
    const longitude = parseFloat(selectedItem.lon);

    setSelectedCoordinates({
      latitude: latitude,
      longitude: longitude,
    });
    console.log(latitude); // Log latitude
    console.log(longitude);
    setResults([]);
    setSearchTerm("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleSearch}
        value={searchTerm}
        placeholder="Search EV Charging stations"
      />
      {results.length > 0 && (
        <FlatList
          style={styles.results}
          data={results}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleSelectPlace(item)}
              style={styles.resultItem}
            >
              <Text>{item.display_name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.BACKGROUND_COLOR,
    borderRadius: 99,
  },
  results: {
    backgroundColor: Colors.BACKGROUND_COLOR,
    flex: 1,
  },
  resultItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});

export default SearchBar;
