import React from 'react'
import {AppRegistry} from 'react-native';
import { Root } from 'native-base'
import AppNavigations from './Navigators';
import {name as appName} from './app.json';

const App = () => (
  <AppNavigations />
)

AppRegistry.registerComponent(appName, () => App);
