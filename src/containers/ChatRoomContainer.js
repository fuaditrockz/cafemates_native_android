import React, { Component } from 'react'
import ChatRoom from '../components/ChatRoom'

export default class ChatContainer extends Component {
  render() {
    return (
      <ChatRoom 
        backToMain={() => this.props.navigation.goBack()}
      />
    )
  }
}