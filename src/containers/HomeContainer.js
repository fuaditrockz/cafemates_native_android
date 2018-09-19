import React, {Component} from 'react'
import Home from '../components/Home'

export default class HomeContainer extends Component {
  render() {
    return (  
      <Home 
        navigateToProfile={() => this.props.navigation.navigate('ProfileContainer')}
        navigateToChat={() => this.props.navigation.navigate('ChatContainer')}
        navigateToNotifications={() => this.props.navigation.navigate('NotificationsContainer')}
      />
    );
  }
}
