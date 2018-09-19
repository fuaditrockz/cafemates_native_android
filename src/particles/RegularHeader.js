import React, { Component } from 'react'
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Header, Left, Body, Right, Button, Title } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class RegularHeader extends Component {
  render() {
    return (
      <Header style={styles.container}>
        <Left>
          <TouchableWithoutFeedback transparent onPress={this.props.backToMain}>
            <Icon name='arrow-left' style={{ color: '#000' }} size={20} />
          </TouchableWithoutFeedback>
        </Left>
        <Body>
          <Title style={{ color: '#000', fontWeight: 'bold' }}>{this.props.title}</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='dots-vertical' style={{ color: '#000' }} size={20} />
          </Button>
        </Right>
      </Header>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
})