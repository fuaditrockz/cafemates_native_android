import React, { Component } from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import HomeContainer from './src/containers/HomeContainer'
import ProfileContainer from './src/containers/ProfileContainer'
import ChatContainer from './src/containers/ChatContainer'
import NotificationsContainer from './src/containers/NotificationsContainer'
import SetOpenPlaceContainer from './src/containers/SetOpenPlaceContainer'
import ChatRoomContainer from './src/containers/ChatRoomContainer'

const AppNavigations = createStackNavigator({
  HomeContainer: { screen: HomeContainer },
  ProfileContainer: { screen: ProfileContainer },
  ChatContainer: { screen: ChatContainer},
  NotificationsContainer: { screen: NotificationsContainer },
  SetOpenPlaceContainer: { screen: SetOpenPlaceContainer },
  ChatRoomContainer: { screen: ChatRoomContainer }
}, {
  initialRouteName: 'HomeContainer',
  headerMode: 'none'
})

export default AppNavigations