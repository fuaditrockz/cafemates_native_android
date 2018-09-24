import React, { Component } from 'react'
import { Modal, View, Text, TouchableWithoutFeedback, StyleSheet, ScrollView, BackHandler } from 'react-native'
import { Header, Left, Body, Right, Button, Title } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Job, BirthDay, School, Match, Favorites, Lived, Religion, Gender, Interested } from '../BioParticles'

class ModalHeader extends Component {
  render() {
    return (
      <Header style={headerStyle.headerContainer}>
        <Left>
          <TouchableWithoutFeedback transparent onPress={this.props.closeModal}>
            <Icon name='close' style={headerStyle.icon} size={20} />
          </TouchableWithoutFeedback>
        </Left>
        <Body>
          <Title style={headerStyle.title}>{this.props.title}</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='pencil' style={headerStyle.icon2} size={20} />
          </Button>
        </Right>
      </Header>
    )
  }
}

export default class ProfileDetailModal extends Component {

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={this.props.handleBackModal}>
        <View>
          <ModalHeader 
            closeModal={this.props.closeModal}
            title='Profile Detail'
          />
          <ScrollView style={{ paddingTop: 10 }}>
            <View style={styles.group}>
              <Text style={styles.title}>Work</Text>
              <Job 
                profession='Chief Executive Officer'
                company='Telecreative'
              />
            </View>
            <View style={styles.group}>
              <Text style={styles.title}>Education</Text>
              <School
                major='Ilmu Kebinatangan'
                school='Harvard University' 
              />
            </View>
            <View style={styles.group}>
              <Text style={styles.title}>Lived At</Text>
              <Lived
                city='Jakarta'
              />
            </View>
            <View style={styles.group}>
              <Text style={styles.title}>Basic Info</Text>
              <Religion
                religion='Christian'
              />
              <BirthDay 
                date='06 January'
              />
              <Gender
                gender='Men'
              />
              <Interested
                interested='Women'
              />
              <Match 
                total={20}
              />
              <Favorites
                favorites='Flirting, ML, Sex, SexSamaBurung, Monyet, Binatang, BibitUnggul, Incest'
              />
              
            </View>
          </ScrollView>
        </View>
      </Modal>
    )
  }
}

const headerStyle = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff'
  },
  icon: { 
    color: '#000' 
  },
  icon2: {
    color: '#2c8dfe' 
  },
  title: { 
    color: '#000', 
    fontWeight: 'bold' 
  }
})

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'rgba(101, 172, 231, 0.08)',
    height: '100%'
  },
  group: {
		paddingVertical: 5,
		paddingHorizontal: 20,
		marginBottom: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    marginBottom: 10
  }
})