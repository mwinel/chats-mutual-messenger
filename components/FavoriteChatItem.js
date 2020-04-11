import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

const FavoriteChatItem = ({ avatar, firstName }) => {
  return (
    <View>
      <View style={styles.chatsContainer}>
        <View>
          <View style={styles.imageContainer}>
            <View>
              <Image style={styles.image} source={{ uri: avatar }} />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.name}>{firstName}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatsContainer: {
    backgroundColor: Colors.grey,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 50,
    height: 50,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  name: {
    fontSize: 13,
    paddingTop: 2,
    color: Colors.black,
    opacity: 0.8
  },
});

export default FavoriteChatItem;
