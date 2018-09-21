import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class Job extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name='briefcase' size={18}/>
        </View>
        <View style={styles.professionContainer}>
          <Text>{this.props.profession}</Text>
        </View>
        <View>
          <Text> at </Text>
        </View>
        <View style={styles.companyContainer}>
          <Text style={styles.result}>{this.props.company}</Text>
        </View>
      </View>
    )
  }
}

class School extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name='school' size={18}/>
        </View>
        <View style={styles.professionContainer}>
          <Text>{this.props.major}</Text>
        </View>
        <View>
          <Text> at </Text>
        </View>
        <View style={styles.companyContainer}>
          <Text style={styles.result}>{this.props.school}</Text>
        </View>
      </View>
    )
  }
}

class BirthDay extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name='cake-variant' size={18}/>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.result}>{this.props.date}</Text>
        </View>
      </View>
    )
  }
}

class Match extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name='account-multiple' size={18}/>
        </View>
        <View>
          <Text>Match with </Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.result}>{this.props.total} people</Text>
        </View>
      </View>
    )
  }
}

class Favorites extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name='chart-bubble' size={18}/>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.result}>{this.props.favorites}</Text>
        </View>
      </View>
    )
  }
}

class Lived extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name='map-marker' size={18}/>
        </View>
        <View>
          <Text>Current City </Text>
        </View>
        <View>
          <Text style={styles.result}>{this.props.city}</Text>
        </View>
      </View>
    )
  }
}

class Religion extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name='star' size={18}/>
        </View>
        <View>
          <Text style={styles.result}>{this.props.religion}</Text>
        </View>
      </View>
    )
  }
}

class Gender extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name='star' size={18}/>
        </View>
        <View>
          <Text>Gender is </Text>
        </View>
        <View>
          <Text style={styles.result}>{this.props.gender}</Text>
        </View>
      </View>
    )
  }
}

class Interested extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name='heart' size={18}/>
        </View>
        <View>
          <Text>Interested in </Text>
        </View>
        <View>
          <Text style={styles.result}>{this.props.interested}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 5
  },
  iconContainer: {
    width: 30
  },
  result: {
    fontWeight: 'bold'
  },
})

module.exports = {
  Job, 
  BirthDay, 
  School, 
  Match, 
  Favorites, 
  Lived, 
  Religion, 
  Gender, Interested
}