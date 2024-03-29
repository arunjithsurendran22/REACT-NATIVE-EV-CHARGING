import React, { useContext } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View, Image } from "react-native";
import MapViewStyle from "../../utils/MapViewStyle";
import { UserLocationContext } from "../../../Context/UserLocationContext";

const AddMapView = () => {
  const { location } = useContext(UserLocationContext);

  // Check if location exists and has latitude property
  if (location && location.latitude) {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          customMapStyle={MapViewStyle}
          region={{
            latitude: location?.latitude,
            longitude: location?.longitude,
            latitudeDelta: 0.0422,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {},
  map: {
    width: "100%",
    height: "100%",
  },
});

export default AddMapView;
