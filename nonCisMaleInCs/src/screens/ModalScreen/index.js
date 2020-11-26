import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';
import styles from './styles';

class ModalScreen extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'leftButton') {
      Navigation.dismissModal(this.props.componentId);
    }
  }

  render() {
    const {text} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{text}</Text>
      </View>
    );
  }
}

export default ModalScreen;
