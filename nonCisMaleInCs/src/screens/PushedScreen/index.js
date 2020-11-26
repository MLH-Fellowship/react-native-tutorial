import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import styles from './styles';

const goBack = ({componentId}) => Navigation.pop(componentId);
const PushedScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Pushed Screen</Text>
      <TouchableOpacity onPress={() => goBack(props)} style={styles.backButton}>
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PushedScreen;
