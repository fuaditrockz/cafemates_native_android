import React, { Component } from 'react'
import { ScrollView , TouchableOpacity} from 'react-native'
import { Container } from 'native-base'

import RegularHeader from '../particles/RegularHeader'
import ChatCard from '../particles/ChatCard'
import Empty from '../particles/Empty'
import { StatusBarWhite } from '../particles/StatusBarParticles'

export default class Chat extends Component {
  render() {
    return (
      <Container>
        <RegularHeader 
          title='Chat'
          backToMain={this.props.backToMain}
        />
        <StatusBarWhite />
        <ScrollView>
          <ChatCard 
            avatar='https://s.kaskus.id/images/2018/06/15/10241338_20180615093427.jpg'
            name='Diana Afrita'
            chat='Kalau gitu sih gausah ngentot lu.'
            time='12:00 PM'
            totalNotif={3}
            navigateToChatRoom={this.props.navigateToChatRoom}
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