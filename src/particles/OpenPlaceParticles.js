import React, { Component } from 'react'
import { StyleSheet, TouchableWithoutFeedback, View, FlatList } from 'react-native'
import { Badge, Text } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class SetPlaceInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tagPlaceContainer}>
          <FlatList
            data={this.props.dataPlaces}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) =>
              <Badge style={styles.badge}>
                <Text style={styles.textBadge}>{item.name}</Text>
              </Badge>
            }
            keyExtractor={item => item.id.toString()}
            horizontal={true}
          />
        </View>
        <TouchableWithoutFeedback>
          <View style={styles.inputPlaceContainer}>
            <View style={{ marginRight: 10 }}>
              <Icon name='map-marker' color='#50e3c2' size={20} />
            </View>
            <View>
              <Text style={{ fontWeight: 'bold', color: '#000' }}>Where are you now?</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%', 
    minHeight: 50, 
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0
  },
  inputPlaceContainer: {
    flexDirection: 'row',
    height: 50,
    paddingVertical: 12,
    paddingHorizontal: 20
  },
  tagPlaceContainer: {
    height: 40,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#f1f1f1',
    flexDirection: 'row',
    paddingBottom: 5
  },
  badge: {
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: '#f2f2f2'
  },
  textBadge: {
    color: '#767676',
    fontWeight: 'bold'
  }
})

module.exports = {
  SetPlaceInput
}