import React, { Component } from 'react'
import SetOpenPlace from '../components/SetOpenPlace'

export default class SetOpenPlaceContainer extends Component {
  render() {
    return (
      <SetOpenPlace 
        backToMain={() => this.props.navigation.goBack()}
      />
    )
  }
}