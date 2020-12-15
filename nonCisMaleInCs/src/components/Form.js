import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Form = ({navigation}) => {
  const [name, setName] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [contribution, setContribution] = useState('');
  const [domain, setDomain] = useState('');
  const [imageSource, setImageSource] = useState('');
  
  const selectImage = () => {
    const options = {
      title: 'You can choose one image',
      mediaType: 'photo',
      maxWidth: 256,
      maxHeight: 256,
      storageOptions: {
        skipBackup: true,
      },
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        Alert.alert('You did not select any image');
      } else if (response.error) {
        Alert.alert('ImagePicker Error: ' + response.error);
      } else if (response.customButton) {
        Alert.alert('User tapped custom button: ' + response.customButton);
      } else {
        const source = {uri: response.uri};
        setImageSource(source.uri);
      }
    });
  }

  const handleSubmit = async () => {
    const res = await AsyncStorage.getItem('data');
    let dataArr = [];
    if (JSON.parse(res)) {
      dataArr = JSON.parse(res);
    }
    const obj = {
      name,
      introduction,
      contribution,
      domain,
      imageSource,
    };
    dataArr.push(obj);
    const jsonValue = JSON.stringify(dataArr);
    await AsyncStorage.setItem('data', jsonValue);
    navigation.navigate('Dashboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}> Add Profile </Text>
      <View>
        <ScrollView>
          <Text style={styles.formLabel}> Name </Text>
          <TextInput
            placeholder="Enter Name"
            style={styles.inputStyle}
            onChangeText={(text) => setName(text)}
          />
          <Text style={styles.formLabel}> Introduction </Text>
          <TextInput
            placeholder="Enter Introduction"
            style={styles.inputStyle}
            onChangeText={(text) => setIntroduction(text)}
          />
          <Text style={styles.formLabel}> Contribution </Text>
          <TextInput
            placeholder="Enter Contributions"
            style={styles.inputStyle}
            onChangeText={(text) => setContribution(text)}
          />
          <Text style={styles.formLabel}> Domains </Text>
          <TextInput
            placeholder="Enter Domains"
            style={styles.inputStyle}
            onChangeText={(text) => setDomain(text)}
          />
          <Text style={styles.formLabel}> Image </Text>
          <TouchableOpacity>
            <Text onPress={selectImage} style={styles.pickImage}>
              Pick an Image
            </Text>
          </TouchableOpacity>
          <Button
            title="Submit"
            raised
            style={styles.button}
            onPress={handleSubmit}
          />
        </ScrollView>
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
    marginTop: 70,
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
    borderColor: '#ABB2B9',
    borderWidth: 1,
    lineHeight: 26,
  },
  pickImage: {
    marginBottom: 30,
    marginTop: 5,
    width: 300,
    paddingHorizontal: 25,
    paddingVertical: 25,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: '#F2F3F4',
    borderWidth: 1,
    borderStyle: 'dashed',
    lineHeight: 26,
    color: 'black',
    textAlign: 'center',
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
