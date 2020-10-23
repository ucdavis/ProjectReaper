import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../styles";

type ScreenHeaderProps = {
  name: string;
  openDrawer: Function;
}

export const ScreenHeader = (props: ScreenHeaderProps)=> {
  const { name, openDrawer } = props;

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={()=>openDrawer()}>
        <Ionicons name="ios-menu" size={32} />
      </TouchableOpacity>
      <Text>{name}</Text>
      <Text style={{width:50}}></Text>
    </View>
  );
}