import React, { Component } from "react"
import {
  View, Text, StyleSheet
} from "react-native";
import {
  Thumbnail, Button, Text as NativeBaseText
} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class MapCard extends Component {
  render() {
    return (
      <View style={styles.maincontainer}>
        <View
          key={this.props.id}
          style={styles.container}
        >
          <View style={styles.cardContent} >
            <View>
              <Text style={styles.fullname}>{this.props.fullname}, {this.props.age}</Text>
              <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 10
              }}>
                <Icon name='map-marker' color="#2c8dfe" size={15}/>
                <Text style={styles.place}>{this.props.place}</Text>
              </View>
            </View>
          </View>
          <Text style={styles.quotes} >
            "{this.props.quotes}"
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "100" }}>
            {this.props.created_at} min ago
          </Text>
          {/* <View style={styles.buttonContent}>
            <Button style={styles.seeMore}><NativeBaseText uppercase={false}> See More </NativeBaseText></Button>
            <Button style={styles.join}><NativeBaseText uppercase={false}> Join </NativeBaseText></Button>
          </View> */}
        </View>
        <View style={styles.arrowBorder} />
        <View style={styles.arrow} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    shadowColor: '#000000'
  },
  container: {
    width: 290,
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    paddingBottom: 15,
    paddingTop: 10,
    paddingHorizontal: 15,
    borderRadius: 6
  },
  avatar: {
    marginRight: 10
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8
  },
  fullname: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#4a4a4a"
  },
  place: {
    fontSize: 15,
    fontWeight: "600"
  },
  quotes: {
    fontSize: 15,
    fontWeight: "100",
    marginBottom: 2,
    color: "#4a4a4a"
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: '#fff',
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: '#fff',
    alignSelf: 'center',
    marginTop: -0.5,
  },
  seeMore: {
    height: 30,
    width: 100,
    marginRight: 5,
    backgroundColor: "#33d8b3",
    fontWeight: "800"
  },
  join: {
    height: 30,
    width: 100,
    backgroundColor: "#2c8dfe",
    justifyContent: "center",
    fontWeight: "800"
  }
})
