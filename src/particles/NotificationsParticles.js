import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import { Thumbnail, Badge, Text as NativeBaseText } from 'native-base';
import Grid from 'react-native-grid-component';

class NotificationsConfirmed extends Component {
  render() {
    return (
      <TouchableWithoutFeedback>
        <View style={[styles.container, {backgroundColor: 'rgba(42, 141, 254, 0.14)'}]}>
          <View style={styles.avatarContainer}>
            <Thumbnail source={{ uri: this.props.avatar }} small/>
          </View>
          <View style={{ width: '70%' }}>
            <View style={styles.contentContainer}>
              <Text style={{ fontWeight: 'bold', color: '#000' }}>{this.props.name}</Text>
              <Text style={{ color: '#000' }}> has been </Text>
              <Text style={{ fontWeight: 'bold', color: '#2c8dfe' }}>{this.props.notificationContent}.</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={{ color: '#000' }}>Let's meet her at the place.</Text>
            </View>
          </View>
          <View style={styles.timeContainer}>
            <Text style={{ alignSelf: 'flex-end', fontSize: 10}}>{this.props.time}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

class NotificationsRejected extends Component {
  render() {
    return (
      <TouchableWithoutFeedback>
        <View style={[styles.container, {backgroundColor: 'rgba(254, 42, 42, 0.08)'}]}>
          <View style={styles.avatarContainer}>
          <Thumbnail source={{ uri: this.props.avatar }} small/>
          </View>
          <View style={{ width: '70%' }}>
            <View style={styles.contentContainer}>
              <Text style={{ fontWeight: 'bold', color: '#000' }}>{this.props.name}</Text>
              <Text style={{ color: '#000' }}> has been </Text>
              <Text style={{ fontWeight: 'bold', color: '#fe2a2a' }}>{this.props.notificationContent}.</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={{ color: '#000' }}>Don't be sad, find other people.</Text>
            </View>
          </View>
          <View style={styles.timeContainer}>
            <Text style={{ alignSelf: 'flex-end', fontSize: 10}}>{this.props.time}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

class NotificationsPeopleHasJoined extends Component {
  _renderItem = (data, i) => (
    <Thumbnail source={{ uri: data }} style={styles.imageAvatarMini} key={i} />
  );

  _renderPlaceholder = i => <View style={styles.item} key={i} />;

  render() {
    return (
      <TouchableWithoutFeedback>
        <View style={[styles.container, {backgroundColor: 'rgba(1, 223, 27, 0.11)'}]}>
          <View style={styles.avatarContainer}>
            <Grid
              style={styles.list}
              renderItem={this._renderItem}
              renderPlaceholder={this._renderPlaceholder}
              data={this.props.dataAvatar}
              itemsPerRow={2}
            />
          </View>
          <View style={{ width: '70%' }}>
            <View style={styles.contentContainer}>
              <Text style={{ fontWeight: 'bold', color: '#009e00' }}>{this.props.totalPeople} want joined you.</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={{ color: '#000' }}>Please determine them now.</Text>
            </View>
          </View>
          <View style={styles.timeContainer}>
            <Text style={{ alignSelf: 'flex-end', fontSize: 10}}>{this.props.time}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatarContainer: {
    marginRight: 15, 
    width: '10%'
  },
  contentContainer: {
    flexDirection: 'row'
  },
  timeContainer: {
    width: '20%',
    paddingRight: 20
  },
  imageAvatarMini: {
    width: 19, 
    height: 19,
    flex: 1,
    margin: 1
  },
  item: {
    flex: 1,
    height: 160,
    margin: 1
  },
  list: {
    flex: 1
  }
})

module.exports = {
  NotificationsConfirmed,
  NotificationsRejected,
  NotificationsPeopleHasJoined
}