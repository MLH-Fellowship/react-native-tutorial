import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Non-Cis-Males in CS</Text>
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

export default Header;
