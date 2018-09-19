import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Input } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { responsiveWidth, responsiveHeight } from 'react-native-rescomponent'

export default class SearchBar extends Component {
  render() {
    return (
      <View style={styles.searchContainer}>
        <View style={styles.searchContent}>
          <View style={styles.searchIcon}>
            <Icon name="magnify" color="#8A8A8A" size={20}/>
          </View>
          <View style={styles.searchInput}>
            <Input placeholder="Search place..." />
          </View>
          <View style={styles.settingsIcon}>
            <Icon name="settings" color="#2c8dfe" size={20}/>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchContainer : {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchContent: {
    backgroundColor: '#fff',
    width: responsiveWidth('90%'),
    height: responsiveHeight(7),
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  searchInput: {
    width: responsiveWidth('70%')
  },
  searchIcon: {
    marginRight: 10,
    marginTop: 13
  },
  settingsIcon: {
    marginLeft: 10,
    marginTop: 13
  }
});
