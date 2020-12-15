import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const styles = StyleSheet.create({
  example: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function ExampleView() {
  return (
    <View style={styles.example}>
      <Text>Example!</Text>
    </View>
  );
}

export default ExampleView;
