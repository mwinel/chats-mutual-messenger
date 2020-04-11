import React from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";

import Buttons from "../components/Buttons";
import ChatItem from "../components/ChatItem";
import FavoriteChatItem from "../components/FavoriteChatItem";
import Colors from "../constants/Colors";

const ChatsScreen = (props) => {
  const chats = useSelector((state) => state.chats.availableChats);
  const favoriteChats = useSelector((state) =>
    state.chats.availableChats.filter((chat) => chat.favorite === true)
  );

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Button links */}
        <Buttons />
        {/* Favorite chats carousel */}
        <View>
          <View style={styles.scrollContainer}>
            <Text style={styles.favoritesTitle}>Favorites</Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={favoriteChats}
              keyExtractor={(favorite) => favorite.id}
              renderItem={(itemData) => (
                <FavoriteChatItem
                  avatar={itemData.item.avatar}
                  firstName={itemData.item.firstName}
                />
              )}
            />
          </View>
        </View>
        {/* Chats list */}
        <FlatList
          data={chats}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <ChatItem
              avatar={itemData.item.avatar}
              firstName={itemData.item.firstName}
              lastName={itemData.item.lastName}
              message={itemData.item.message}
              chatTime={itemData.item.chatTime}
            />
          )}
        />
        <View style={styles.textBottomContainer}>
          <Text style={styles.textBottom}>
            Swipe right or left for more chat options.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 10,
    marginLeft: 5,
  },
  favoritesTitle: {
    marginHorizontal: 12,
    fontWeight: "bold",
    color: Colors.black,
    opacity: 0.9,
  },
  textBottomContainer: {
    alignItems: "center",
    paddingVertical: 15,
  },
  textBottom: {
    fontSize: 12,
    color: Colors.black,
    opacity: 0.7,
  },
});

export default ChatsScreen;
