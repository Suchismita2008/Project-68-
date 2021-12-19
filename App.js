import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "react-navigation-tabs";

export default function App() {
 render(){
  return <AppContainer />;
 }   
  )
}
const TabNavigator = createBottomTabNavigator({
  Facebook: { screen: Facebook },
  Instagram: { screen: Instagram }
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
