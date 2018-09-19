import React, { Component } from 'react'
import { Modal, View, Text, TouchableWithoutFeedback, StyleSheet, ScrollView } from 'react-native'
import { Header, Left, Body, Right, Button, Title, Thumbnail } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import SearchBar from '../SearchBar'

export default class SearchPlaceModal extends Component {
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View>
          <Header style={styles.container}>
            <Left>
              <TouchableWithoutFeedback transparent onPress={this.props.closeModal}>
                <Icon name='close' style={{ color: '#000' }} size={20} />
              </TouchableWithoutFeedback>
            </Left>
            <Body>
              <Title style={{ color: '#000', fontWeight: 'bold' }}>Search Place</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='dots-vertical' style={{ color: '#000' }} size={20} />
              </Button>
            </Right>
          </Header>
          <View style={styles.content}>
            <SearchBar />
            <ScrollView style={{ paddingHorizontal: 10 }}>
              <CardList 
                picture='https://2cvparistour.com/wp-content/uploads/2012/01/2CVParisTour-Place-des-Victoires.jpg'
                placeName='Central Park'
                streetName='Jl Mongonsidi no 121, Jakarta Utara. DKI Jakarta, Indonesia'
              />
              <CardList 
                picture='https://upload.wikimedia.org/wikipedia/commons/2/2c/Connaught_Place_New_Delhi.jpg'
                placeName='Rukan Kelapa Gading'
                streetName='Jl Ibnu Khaldun no 1, Indonesia'
              />
              <CardList 
                picture='https://www.sthelensstar.co.uk/resources/images/8678371.jpg'
                placeName='Gorengan Mas Rusdi'
                streetName='Ruko Penjaringan, Jakarta Utara.'
              />
              <CardList 
                picture='https://img.rasset.ie/000f0dcb-800.jpg'
                placeName='Stadion Kridisono'
                streetName='Jl Kementrian Olahraga. D23. Indonesia'
              />
            </ScrollView>
          </View>
        </View>
      </Modal>
    )
  }
}

class CardList extends Component {
  render() {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.cardContainer}>
          <Thumbnail source={{ uri: this.props.picture }} small square />
          <View style={styles.cardContent}>
            <Text style={styles.placeName}>{this.props.placeName}</Text>
            <Text style={styles.streetName} numberOfLines={1}>{this.props.streetName}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  content: {
    backgroundColor: 'rgba(101, 172, 231, 0.08)',
    height: '100%'
  },
  cardContainer: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 5
  },
  cardContent: {
    marginLeft: 15
  },
  placeName: {
    fontWeight: 'bold',
    color: '#000'
  },
  streetName: {
    flex: 1,
    width: 290
  }
})