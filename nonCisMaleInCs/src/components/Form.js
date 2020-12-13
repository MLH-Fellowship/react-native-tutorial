import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
  SafeAreaView,
} from 'react-native';

const Form = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.formLabel}> Add Women In Tech </Text>
      <View>
        <TextInput placeholder="Enter Name" style={styles.inputStyle} />
        <TextInput placeholder="Enter Introduction" style={styles.inputStyle} />
        <TextInput
          placeholder="Enter Contributions"
          style={styles.inputStyle}
        />
        <TextInput placeholder="Enter Domains" style={styles.inputStyle} />
        <TextInput placeholder="Select Image" style={styles.selectimgStyle} />
        <Button
          title="Submit"
          raised
          style={styles.button}
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  formLabel: {
    fontSize: 30,
    color: '#3498DB',
    fontWeight: 'bold',
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    paddingHorizontal: 25,
    borderRadius: 5,
    backgroundColor: '#F2F3F4',
    lineHeight: 26,
  },
  selectimgStyle: {
    marginTop: 20,
    width: 300,
    paddingHorizontal: 25,
    marginBottom: 30,
    borderRadius: 5,
    backgroundColor: '#F2F3F4',
    lineHeight: 26,
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 26,
  },
  button: {
    width: '100%',
    marginVertical: 30,
    paddingVertical: 30,
  },
});

export default Form;
