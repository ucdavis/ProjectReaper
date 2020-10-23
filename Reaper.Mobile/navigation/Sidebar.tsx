import * as React from 'react';
import { FlatList, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { View } from '../components/Themed';
import { useState } from '@hookstate/core';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import { NavigationState } from '@react-navigation/native';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';

type ItemProps = {
  navigation: DrawerNavigationHelpers;
  item: RouteData
}

type RouteData = {
  name: string;
  icon: string;
};

function Item(props: ItemProps) {
  const { item, navigation } = props
  return (
    <TouchableOpacity style={styles.listItem} onPress={()=>navigation.navigate(item.name)}>
      <Ionicons name={item.icon} size={32} />
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
}

export default function Sidebar(props: DrawerContentComponentProps<DrawerContentOptions>) {

  const { navigation } = props;

  const routes = useState<RouteData[]>([
    { name: "Home", icon: "ios-home" },
    { name: "TimeSheets", icon: "ios-settings" },
  ]);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/favicon.png")} style={styles.profileImg}/>
      <Text style={{fontWeight:"bold",fontSize:16,marginTop:10}}>John Doe</Text>
      <Text style={{color:"gray",marginBottom:10}}>john@doe.com</Text>
      <View style={styles.sidebarDivider}></View>
      <FlatList<RouteData>
        style={{width:"100%",marginLeft:30}}
        data={routes.get()}
        renderItem={({ item }) => <Item  item={item} navigation={navigation}/>}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listItem:{
    height:60,
    alignItems:"center",
    flexDirection:"row",
  },
  profileImg:{
    width:80,
    height:80,
    borderRadius:40,
    marginTop:20
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20
  },
  sidebarDivider:{
    height:1,
    width:"100%",
    backgroundColor:"lightgray",
    marginVertical:10
  }
});
