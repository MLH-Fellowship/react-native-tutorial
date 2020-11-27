import React from 'react';
import {StyleSheet, View, Text, Image, Button, Alert, TouchableOpacity} from 'react-native';
// import { Icon } from 'react-native-elements' 
// import { Header } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import editIcon from './edit.png';
import nophoto from './nophoto.png';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const onPressed = () => {
  Alert.alert('Edit button got pressed!');
};

const DetailsView = () => {
  return (
    <>
      <View style={styles.menuContainerStyle}>
        <Text style={styles.menuText}>{'< Home'}</Text>
      </View>
      <View style={styles.headerImageContainer}>
        <Image style={styles.imageStyle} source={nophoto} />
      </View>
      <View style={styles.body}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>JOHN DOE</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Introduction</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Contribution</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Domain ( Tag form )</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPressed} style={styles.appButtonContainer}>
        <Image source={editIcon} style={styles.appButtonIcon} />
        <Text style={styles.appButtonText}>Edit Button</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
   menuContainerStyle: {
    backgroundColor: '#3D6DCC',
    padding: 25,
   },
  menuText: {    
    color: Colors.white,
    fontSize: 23    
  },
  headerImageContainer: {
    alignItems: 'center',
  },
  imageStyle: {
    backgroundColor: Colors.lighter,
    height: 200,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    flexDirection: 'column',
    marginBottom: 5
  },
  titleContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 40,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  appButtonIcon: {
    height: 30,
    width: 30,
    marginRight: 24   
  },
  appButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'flex-start',
    margin: 25,    
    padding: 15,
    backgroundColor: '#3D6DCC',
  },
  appButtonText: {
    fontSize: 18,
    height: 30,
    color: Colors.white,    
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    marginLeft: 60
  }
});

export default DetailsView;
