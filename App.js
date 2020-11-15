import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import Exchange from './screens/ExchangeScreen'
import Home from './screens/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Exchange" component={ExchangeScreen} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <WelcomeScreen/>

  );
}
