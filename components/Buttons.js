import React, { useState } from "react";
import { View } from "react-native";
import { ButtonGroup } from "react-native-elements";

import Colors from "../constants/Colors";

const Buttons = () => {
  const buttons = ["Feeds", "Chats", "Mutuals"];

  return (
    <View style={{ backgroundColor: Colors.white }}>
      <ButtonGroup
        buttons={buttons}
        containerStyle={{ borderWidth: 0, height: 25 }}
        innerBorderStyle={{ width: 0 }}
        selectedButtonStyle={{
          borderBottomColor: Colors.red,
          borderBottomWidth: 2,
        }}
      />
    </View>
  );
};

export default Buttons;
