import React, { Component } from 'react'
import Chat from '../components/Chat'

export default class ChatContainer extends Component {
  render() {
    return (
      <Chat 
        backToMain={() => this.props.navigation.goBack()}
      />
    )
  }
}