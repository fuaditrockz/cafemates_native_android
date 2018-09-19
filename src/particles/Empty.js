import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

import validationImage from '../assets/stocking.png'

export default class Empty extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', paddingVertical: 10 }}>
        <View style={{
          width: 100, 
          height: 100,
          paddingVertical: 10, 
          paddingHorizontal: 10
        }}>
          <Image 
            source={require('../assets/stocking.png')} 
            style={{width: "100%", height: "100%", resizeMode:'contain'}}
          />
        </View>
        <Text style={{ width: 200, textAlign: 'center' }}>{this.props.text}</Text>
      </View>
    )
  }
}