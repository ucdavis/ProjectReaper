import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { DrawerActions, NavigationProp, RouteProp } from '@react-navigation/native';
import { TimeSheetsParamList } from '../types';
import TimeSheetsList from './TimeSheetsList';
import { ScreenHeader } from '../components/ScreenHeader';

export type TimeSheetsScreenProps = {
  navigation: NavigationProp<TimeSheetsParamList, 'TimeSheetsScreen'>;
  route: RouteProp<TimeSheetsParamList, 'TimeSheetsScreen'>
}

export default function TimeSheetsScreen(props: TimeSheetsScreenProps) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <ScreenHeader name="TimeSheets" openDrawer={() => navigation.dispatch(DrawerActions.openDrawer()) }/>
      <Text style={styles.title}>TimeSheets</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TimeSheetsList {...props} />
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
