import React, { Component } from "react";
import {
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Image,
  Text,
  Platform,
  Animated,
  StyleSheet
} from "react-native";
import MapView, { Callout } from "react-native-maps";
import Icon from "react-native-vector-icons/Ionicons";
import MapCard from "./MapCard"
import { data } from "../../data/data"

const { width, height } = Dimensions.get("window");

const MAP_HEIGHT = height * 0.75;
const CARD_HEIGHT = height - MAP_HEIGHT - 20;
const CARD_WIDTH = 300;
const ACCENT_COLOUR = "#2c8dfe";

export default class MapCafemates extends Component {
  scrollerRef = null;

  state = {
    people: data,
    selectedProperty: 0
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.scrollerRef &&
      prevState.selectedProperty !== this.state.selectedProperty
    ) {
      this.scrollerRef.scrollTo({
        x: this.state.selectedProperty * CARD_WIDTH,
        y: 0,
        animated: true
      });
    }
  }

  onPress = () => {
    this.setState({
      selectedProperty: 1
    })
  }

  render() {
    const { people, selectedProperty } = this.state;

    return (
      <View style={styles.map}>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: 51.5,
            longitude: -0.15,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
          loadingEnabled
          showsUserLocation
        >
          {people.map((user, index) => (
            <MapView.Marker
              key={user.id}
              coordinate={user.coords}
              image={user.avatarThumbnail}
            >
              <Callout tooltip> 
                <MapCard
                  id={user.id}
                  avatar={user.avatar}
                  fullname={user.firstname + " " + user.lastname}
                  age={user.age}
                  place={user.place}
                  title={user.title}
                  created_at={user.created_at}
                  selected={selectedProperty}
                  index={index}
                  key={index}
                  quotes={user.quotes}
                />
              </Callout>
            </MapView.Marker>
          ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   map: {
     position: 'absolute',
     top: 0,
     left: 0,
     bottom: 0,
     right: 0
   }
});
