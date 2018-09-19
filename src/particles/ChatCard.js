import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import { Thumbnail, Badge, Text as NativeBaseText } from 'native-base';

export default class ChatCard extends Component {
  render() {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <View style={styles.avatarContainer}>
            <Thumbnail source={{ uri: this.props.avatar }} small/>
          </View>
          <View style={styles.contentContainer}>
            <Text style={{ fontWeight: 'bold', color: '#000' }}>{this.props.name}</Text>
            <Text 
              style={{ flex: 1, width: '100%' }} 
              numberOfLines={1}
            >{this.props.chat}</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={{ fontSize: 10 }}>{this.props.time}</Text>
            <Badge style={{ backgroundColor: '#0DD74F'}}>
              <NativeBaseText>{this.props.totalNotif}</NativeBaseText>
            </Badge>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatarContainer: {
    marginRight: 10
  },
  contentContainer: {
    width: '75%'
  },
  timeContainer: {
    paddingLeft: 10
  }
})