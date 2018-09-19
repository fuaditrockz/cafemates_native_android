import React, { Component } from 'react'
import { TouchableWithoutFeedback, StyleSheet, Image, View } from 'react-native'
import { Header, Left, Body, Right, Title, Button } from 'native-base'
import { responsiveWidth, responsiveSize } from 'react-native-rescomponent'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class MainHeader extends Component {
  render() {
    return (
      <Header style={styles.header}>
        <Left>
          <TouchableWithoutFeedback onPress={this.props.navigateToProfile}>
            <Image
              source={{ uri: this.props.photo }}
              style={styles.photoProfile}/>
          </TouchableWithoutFeedback>
        </Left>
        <Body>
          <Title style={styles.title}>{this.props.title}</Title>
        </Body>
        <Right>
          <View>
            <Button transparent onPress={this.props.navigateToChat}>
              <Icon name='forum' color="#2c8dfe" size={20}/>
            </Button>
          </View>
          <View>
            <Button transparent onPress={this.props.navigateToNotifications}>
              <Icon name='bell' color="#2c8dfe" size={20}/>
            </Button>
          </View>
        </Right>
      </Header>
    )
  }
}

const styles = StyleSheet.create({
  header:{
   backgroundColor: '#fff',
   width: responsiveWidth(100),
   height: responsiveSize(8),
  },
  photoProfile: {
    width: responsiveSize(5),
    height: responsiveSize(5),
    borderRadius: responsiveSize(5) / 2
  },
  title:{
    color: '#000',
    fontWeight: 'bold'
  }
});
