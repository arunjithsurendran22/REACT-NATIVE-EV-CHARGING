import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useUser, useClerk } from "@clerk/clerk-expo";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../utils/Colors";

const Header = () => {
  const { user } = useUser();
  const { signOut } = useClerk();

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Image source={{ uri: user?.imageUrl }} style={styles.profileIcon} />
      </View>
      <View style={styles.rightContent}>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
        <FontAwesome name="filter" size={24} color="black" />
        <Image
          source={{
            uri: "https://play-lh.googleusercontent.com/ECrWbkZcf9Of2MJq5H8NTbHN-lG9V6dBpSX6-jeUmkQzzdXlcdj4ttdncotkFZC5_7Q",
          }}
          style={styles.logoImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.BACKGROUND_COLOR,
    width: "100%", 
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileIcon: {
    width: 40, 
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  logoImage: {
    width: 100,
    height: 50,
  },
  logoutText: {
    marginRight: 16,
    fontSize: 16,
    color: Colors.RED, // Customize with your desired color
  },
});

export default Header;
