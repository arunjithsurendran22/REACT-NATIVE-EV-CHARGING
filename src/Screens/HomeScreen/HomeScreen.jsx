import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AddMapView from "./AddMapView";
import Header from "./Header";
import SearchBar from "./SearchBar";

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.HeaderContainer}>
        <Header />
        <SearchBar/>
      </View>
      <AddMapView />
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer:{
    position:"absolute",
    zIndex:10,
    padding:10,
    width:"100%",
    paddingHorizontal:20
  }
});

export default HomeScreen;
