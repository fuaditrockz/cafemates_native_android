import React, { Component } from 'react'
import { View, Text, StatusBar, ScrollView } from 'react-native'
import { Container } from 'native-base'

import RegularHeader from '../particles/RegularHeader'
import Empty from '../particles/Empty'

export default class Notifications extends Component {
  render() {
    return (
      <Container>
        <RegularHeader 
          title='Notifications'
          backToMain={this.props.backToMain}
        />
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#fff"
        />
        <ScrollView>
          <Empty
            text="No any notifications right now." 
          />
        </ScrollView>
      </Container>
    )
  }
}