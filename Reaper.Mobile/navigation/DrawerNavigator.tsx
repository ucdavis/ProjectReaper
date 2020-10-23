import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import TimeSheetsScreen from '../screens/TimeSheetsScreen';
import { DrawerParamList, HomeParamList, TimeSheetsParamList, TimeSheet } from '../types';

import { timeSheets } from '../data';
import Sidebar from './Sidebar';

const Drawer = createDrawerNavigator<DrawerParamList>();

export function DrawerNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{ activeTintColor: Colors[colorScheme].tint }}
      drawerContent={(props) => <Sidebar {...props}/>}>
      <Drawer.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          drawerIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <Drawer.Screen
        name="TimeSheets"
        component={TimeSheetsNavigator}
        options={{
          drawerIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home Title' }}
      />
    </HomeStack.Navigator>
  );
}

const TimeSheetsStack = createStackNavigator<TimeSheetsParamList>();

function TimeSheetsNavigator() {
  return (
    <TimeSheetsStack.Navigator>
      <TimeSheetsStack.Screen
        name="TimeSheetsScreen"
        component={TimeSheetsScreen}
        options={{ headerTitle: 'TimeSheets Title' }}
        initialParams={ { timeSheets } }
      ></TimeSheetsStack.Screen>
    </TimeSheetsStack.Navigator>
  );
}
