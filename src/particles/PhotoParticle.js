import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'

class PhotoParticle extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: this.props.photoUrl }} style={styles.image} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 94,
    height: 94,
    marginRight: 5
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

export default PhotoParticle