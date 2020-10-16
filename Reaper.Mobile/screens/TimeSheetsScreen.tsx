import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { TimeSheetsParamList, TimeSheet } from '../types';
import TimeSheetsList from './TimeSheetsList';

export type TimeSheetsScreenProps = {
  navigation: NavigationProp<TimeSheetsParamList, 'TimeSheetsScreen'>;
  route: RouteProp<TimeSheetsParamList, 'TimeSheetsScreen'>
}

export default function TimeSheetsScreen(props: TimeSheetsScreenProps) {

  return (
    <View style={styles.container}>
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
