import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ChatsScreen from "../screens/ChatsScreen";
import Header from "../components/Header";

import Colors from "../constants/Colors";

const screens = {
  Chats: {
    screen: ChatsScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="Mutual" navigation={navigation} />,
      };
    },
  },
};

const ChatsNavigator = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.white,
      height: 70,
      elevation: 0,
      shadowOpacity: 0,
    },
  },
});

export default createAppContainer(ChatsNavigator);
