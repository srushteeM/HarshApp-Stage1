import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import SelectSubjectScreen from './screens/SelectSubjectScreen';
import HomeScreen from './screens/HomeScreen';
export default class App extends Component {
  render() {
    return (
    <AppContainer/>
    )
  }
}
const SwitchNavigator=createSwitchNavigator({
  LoginScreen:LoginScreen,
  SelectSubjectScreen:SelectSubjectScreen,
  HomeScreen:HomeScreen,
})

 const AppContainer=createAppContainer(SwitchNavigator)
