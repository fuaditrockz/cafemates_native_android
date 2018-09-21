import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Container } from 'native-base'

import RegularHeader from '../particles/RegularHeader'
import { NotificationsConfirmed, NotificationsRejected, NotificationsPeopleHasJoined } from '../particles/NotificationsParticles'
import Empty from '../particles/Empty'
import { StatusBarWhite } from '../particles/StatusBarParticles'

export default class Notifications extends Component {
  render() {
    return (
      <Container>
        <RegularHeader 
          title='Notifications'
          backToMain={this.props.backToMain}
        />
        <StatusBarWhite />
        <ScrollView>
          <NotificationsConfirmed 
            avatar='https://s.kaskus.id/images/2018/06/15/10241338_20180615093427.jpg'
            name='Dian'
            notificationContent='confirmed you'
            time='12:00 PM'
          />
          <NotificationsRejected 
            avatar='https://s.kaskus.id/images/2018/06/15/10241338_20180615093427.jpg'
            name='Dian'
            notificationContent='rejected you'
            time='12:00 PM'
          />
          <NotificationsPeopleHasJoined 
            dataAvatar={[
              'https://s.kaskus.id/images/2018/06/15/10241338_20180615093427.jpg',
              'https://s.kaskus.id/images/2018/06/15/10241338_20180615093427.jpg',
              'https://s.kaskus.id/images/2018/06/15/10241338_20180615093427.jpg',
              'https://s.kaskus.id/images/2018/06/15/10241338_20180615093427.jpg'
            ]}
            totalPeople={5}
            time='12:00 PM'
          />
          <Empty
            text="No any notifications right now." 
          />
        </ScrollView>
      </Container>
    )
  }
}