import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Form, Textarea } from 'native-base'

import RegularHeader from '../particles/RegularHeader'
import SetPlaceInput from '../particles/SetPlaceInput'
import { StatusBarWhite } from '../particles/StatusBarParticles'

export default class SetOpenPlace extends Component {
  render() {
    return (
      <Container>
        <RegularHeader 
          title='Set Open Place'
          backToMain={this.props.backToMain}
        />
        <StatusBarWhite />
        <Content padder>
          <Form>
            <Textarea 
              rowSpan={5} 
              placeholder="What's on your mind?" 
              style={styles.textContainer}
            />
          </Form>
        </Content>
        <SetPlaceInput 
          dataPlaces={[
            {
              id: 1,
              name: "Kalimalang"
            },
            {
              id: 2,
              name: "Gargantua"
            },
            {
              id: 3,
              name: "HipHop Lotte"
            },
            {
              id: 4,
              name: "Gargantua Fourth Avenue"
            }
          ]}
        />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  textContainer: {
    fontSize: 22,
    height: 150
  }
})