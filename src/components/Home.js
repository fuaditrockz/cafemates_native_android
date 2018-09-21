import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native'
import { Container, Fab } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import MainHeader from '../particles/MainHeader'
import SearchBar from '../particles/SearchBar'
import MapCafemates from '../particles/MapV1/MapCafemates'
import { StatusBarWhite } from '../particles/StatusBarParticles'

export default class Home extends Component {
  render() {
    return (
      <Container>
        <MainHeader
          photo="https://s3.amazonaws.com/aspph-wp-production/app/uploads/2017/03/Ans-.jpg"
          title="Hi, Abu Janda"
          navigateToProfile={this.props.navigateToProfile}
          navigateToChat={this.props.navigateToChat}
          navigateToNotifications={this.props.navigateToNotifications}
        />
        <StatusBarWhite />
        <SearchBar/>
        <Fab
          active={true}
          containerStyle={{ }}
          style={{ backgroundColor: '#2c8dfe' }}
          position="bottomRight"
          onPress={this.props.navigateToSetOpenPlace}>
          <Icon name="plus" />
        </Fab>
        <View style={styles.container}>
          <MapCafemates />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
   position: 'absolute',
   top: 0,
   left: 0,
   bottom: 0,
   right: 0,
   justifyContent: 'flex-end',
   alignItems: 'center',
   zIndex: -10
 }
});
