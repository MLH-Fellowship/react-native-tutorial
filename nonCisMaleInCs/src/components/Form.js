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
      <Text style={styles.heading}> Add Profile </Text>
      <View>
        <Text style={styles.formLabel}> Name </Text>
        <TextInput placeholder="Enter Name" style={styles.inputStyle} />
        <Text style={styles.formLabel}> Introduction </Text>
        <TextInput placeholder="Enter Introduction" style={styles.inputStyle} />
        <Text style={styles.formLabel}> Contribution </Text>
        <TextInput
          placeholder="Enter Contributions"
          style={styles.inputStyle}
        />
        <Text style={styles.formLabel}> Domains </Text>
        <TextInput placeholder="Enter Domains" style={styles.inputStyle} />
        <Text style={styles.formLabel}> Image </Text>
        <TextInput placeholder="Select Image" style={styles.selectimgStyle} />
        <Button
          title="Submit"
          raised
          style={styles.button}
          onPress={() => Alert.alert('New Profile Added')}
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

  heading: {
    fontSize: 30,
    color: '#3498DB',
    fontWeight: 'bold',
  },
  formLabel: {
    fontSize: 15,
    marginBottom: 0,
    marginTop: 20,
  },
  inputStyle: {
    marginTop: 5,
    width: 300,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: '#F2F3F4',
    lineHeight: 26,
  },
  selectimgStyle: {
    marginTop: 5,
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
