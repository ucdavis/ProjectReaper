import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import TimeSheetsScreen from '../screens/TimeSheetsScreen';
import { BottomTabParamList, HomeParamList, TimeSheetsParamList, TimeSheet } from '../types';

import { timeSheets } from '../data';

// const timeSheets: TimeSheet[] = [
//   {
//     id: "asdf",
//     location: {id: 0, name: "a location", unit: { id: 0, name: "a unit"}, size: 1},
//     project: {
//       id: 0,
//       name:"A project",
//       description: "a description",
//       locations: []
//     },
//     workItems: []
//   }
// ];

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TimeSheets"
        component={TimeSheetsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
        initialParams={ { timeSheets } }
      />
    </BottomTab.Navigator>
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
