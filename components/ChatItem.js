import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const ChatItem = ({ avatar, firstName, lastName, message, chatTime }) => {
  // Strip messsage if it is longer than 25 characters.
  let updatedMessage = message;
  const messageComponent = () => {
    if (updatedMessage.length > 25) {
      return (
        <Text style={styles.message}>{updatedMessage.substring(0, 25)}...</Text>
      );
    } else {
      return <Text style={styles.message}>{updatedMessage}</Text>;
    }
  };

  return (
    <View style={styles.chatsContainer}>
      <View style={styles.container}>
        <View style={{ width: "20%" }}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: avatar }} />
          </View>
        </View>

        <View style={styles.messageContainer}>
          <View style={{ width: "80%" }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.name}>{firstName}</Text>
              <Text style={styles.name}>{lastName}</Text>
            </View>
            <View>{messageComponent()}</View>
          </View>

          <View style={{ width: "20%", flexDirection: "row" }}>
            <Text style={styles.chatTime}>{chatTime}</Text>
            <MaterialIcons
              name="chevron-right"
              size={20}
              color="#ababab"
              style={styles.icon}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // justifyContent: 'center',
    // alignItems: 'center'
    paddingTop: 10
  },
  chatsContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 15
  },
  imageContainer: {
    width: 50,
    height: 50,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  messageContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    borderBottomWidth: 1,
    paddingBottom: 15,
    paddingTop: 5,
    borderColor: Colors.grey,
  },
  name: {
    fontWeight: "bold",
    paddingRight: 5,
    color: Colors.black,
  },
  message: {
    paddingRight: 5,
    color: Colors.black,
    opacity: 0.9,
  },
  chatTime: {
    fontSize: 12,
    paddingRight: 5,
    color: Colors.black,
    opacity: 0.5,
    width: "70%",
    justifyContent: "flex-end",
    alignContent: "flex-end",
  },
  icon: {
    width: "30%",
    alignItems: "center",
  },
});

export default ChatItem;
