import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {pushScreen, openModal} from 'Navigation';
import styles from './styles';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsSection}>
        <TouchableOpacity
          onPress={() => pushScreen(props)}
          style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Push Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openModal} style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>open a modal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
