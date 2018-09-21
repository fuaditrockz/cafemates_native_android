import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import { StatusBarBlue } from '../particles/StatusBarParticles'

export default class SplashContainer extends Component {
  componentWillMount() {
    setInterval(() => {
      this.props.navigation.navigate('HomeContainer')
    }, 3000)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBarBlue />
        <View style={styles.content}>
          <Image source={require('../assets/logo.png' )} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c8dfe',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  content: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: "80%", 
    height: "80%", 
    resizeMode:'contain'
  }
})