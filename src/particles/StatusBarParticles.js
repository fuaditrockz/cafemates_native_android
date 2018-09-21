import React, { Component } from 'react'
import { StatusBar } from 'react-native'

class StatusBarWhite extends Component {
  render() {
    return (
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
      />
    )
  }
}

class StatusBarBlue extends Component {
  render() {
    return (
      <StatusBar
        barStyle="light-content"
        backgroundColor="#2c8dfe"
      />
    )
  }
}

class StatusBarTransparent extends Component {
  render() {
    return (
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(42, 141, 254, 0)"
        translucent={true}
      />
    )
  }
}

module.exports = {
  StatusBarWhite, StatusBarBlue, StatusBarTransparent
}