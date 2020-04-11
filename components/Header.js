import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      {/* Header title */}
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>

      {/* Search Bar */}

      {/* Notifications Icon */}

      {/* User Header Avatar */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#333",
  },
});

export default Header;
