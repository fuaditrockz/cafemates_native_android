import React, { Component } from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { Container, Content, Form, Textarea } from 'native-base'

import RegularHeader from '../particles/RegularHeader'
import { SetPlaceInput } from '../particles/OpenPlaceParticles'

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
    fontSize: 22
  }
})