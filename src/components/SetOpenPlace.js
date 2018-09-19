import React, { Component } from 'react'

import React, { Component } from 'react'
import { StatusBar, ScrollView } from 'react-native'
import { Container } from 'native-base'

import RegularHeader from '../particles/RegularHeader'

export default class SetOpenPlace extends Component {
  render() {
    return (
      <Container>
        <RegularHeader 
          title='Set Open Place'
          backToMain={this.props.backToMain}
        />
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#fff"
        />
        <ScrollView>
          
        </ScrollView>
      </Container>
    )
  }
}