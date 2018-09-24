import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'

import { StatusBarWhite } from '../particles/StatusBarParticles'
import RegularHeader from '../particles/RegularHeader'

export default class ChatRoom extends Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <RegularHeader 
          title='Diana Afrita'
          backToMain={this.props.backToMain}
        />
        <StatusBarWhite />
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  }
})