import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { DrawerActions } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { ScreenHeader } from '../components/ScreenHeader';
import { Text, View } from '../components/Themed';

type HomeScreenProps = {
  navigation: DrawerNavigationHelpers;
};

export default function HomeScreen(props: HomeScreenProps) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <ScreenHeader name="Home" openDrawer={() => navigation.dispatch(DrawerActions.openDrawer()) }/>
      <Text style={styles.title}>Home</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/HomeScreen.js" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
