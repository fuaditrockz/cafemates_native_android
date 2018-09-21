import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class Empty extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image 
            source={require('../assets/stocking.png')} 
            style={styles.image}
          />
        </View>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    paddingVertical: 10
  },
  content: {
    width: 100, 
    height: 100,
    paddingVertical: 10, 
    paddingHorizontal: 10
  },
  image: {
    width: "100%", 
    height: "100%", 
    resizeMode:'contain'
  },
  text: {
    width: 200, 
    textAlign: 'center'
  }
})
