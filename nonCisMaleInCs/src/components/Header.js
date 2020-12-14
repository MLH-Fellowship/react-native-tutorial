import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>React Native Tutorial</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: '#3498DB',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
});
