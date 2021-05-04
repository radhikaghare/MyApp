
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomScreen'
import ShowData from './screens/ShowData'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';



export default function App() {
  return (
    <AppContainer/>
  );
}

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen : {
    screen: HomeScreen,
    
  },
  ShowData: {
    screen: ShowData,
    
  }
});

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  AppTabNavigator:AppTabNavigator
})

const AppContainer =  createAppContainer(switchNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
