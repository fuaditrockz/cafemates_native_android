import React, { Component } from 'react'
import Notifications from '../components/Notifications'

export default class NotificationsContainer extends Component {
  render() {
    return (
      <Notifications 
        backToMain={() => this.props.navigation.goBack()}
      />
    )
  }
}