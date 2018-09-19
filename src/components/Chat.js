import React, { Component } from 'react'
import { View, Text, StatusBar, ScrollView } from 'react-native'
import { Container } from 'native-base'

import RegularHeader from '../particles/RegularHeader'
import ChatCard from '../particles/ChatCard'
import Empty from '../particles/Empty'

export default class Chat extends Component {
  render() {
    return (
      <Container>
        <RegularHeader 
          title='Chat'
          backToMain={this.props.backToMain}
        />
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#fff"
        />
        <ScrollView>
          <ChatCard 
            avatar='https://s.kaskus.id/images/2018/06/15/10241338_20180615093427.jpg'
            name='Diana Afrita'
            chat='Kalau gitu sih gausah ngentot aja, susah amat! Basi lu.'
            time='12:00 PM'
            totalNotif={3}
          />
          <ChatCard 
            avatar='https://s.kaskus.id/images/2018/06/15/10241338_20180615093427.jpg'
            name='Diana Afrita'
            chat='Kalau gitu sih gausah ngentot aja, susah amat! Basi lu.'
            time='12:00 PM'
            totalNotif={3}
          />
          <Empty 
            text='No available any other chat. Come on, make a conversation!'
          />
        </ScrollView>
      </Container>
    )
  }
}