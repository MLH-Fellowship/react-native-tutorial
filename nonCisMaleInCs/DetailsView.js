import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import editIcon from './assets/images/edit.png';
import nophoto from './assets/images/nophoto.png';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const onPressed = () => {
  Alert.alert('Edit button got pressed!');
};

const DetailsView = () => {
  return (
    <>
      <Text style={styles.menuText}>{'< Home'}</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerImageContainer}>
          <Image style={styles.imageStyle} source={nophoto} />
        </View>
        <View style={styles.body}>
          <Text style={styles.titleStyle}>JOHN DOE</Text>
          <Text style={styles.sectionTitle}>Introduction</Text>
          <Text style={styles.sectionTitle}>Contribution</Text>
          <Text style={styles.sectionTitle}>Domain ( Tag form )</Text>
        </View>
        <TouchableOpacity onPress={onPressed} style={styles.appButtonContainer}>
          <Image source={editIcon} style={styles.appButtonIcon} />
          <Text style={styles.appButtonText}>EDIT BUTTON</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  menuContainerStyle: {
    backgroundColor: '#3D6DCC',
    padding: 25,
  },
  menuText: {
    color: Colors.white,
    fontSize: 23,
    backgroundColor: '#3D6DCC',
    padding: 25,
  },
  headerImageContainer: {
    alignItems: 'center',
    marginVertical: 30
  },
  imageStyle: {
    backgroundColor: Colors.lighter,
    height: 220,
    width: 190
  },
  body: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  titleStyle: {
    fontSize: 40,
    fontWeight: '600',
    color: Colors.black,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: Colors.black,
    marginTop: 32,
    paddingHorizontal: 24,
  },
  appButtonContainer: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginVertical: 30,
    padding: 15,
    backgroundColor: '#3D6DCC',
  },
  appButtonText: {
    fontSize: 18,
    height: 30,
    color: Colors.white,
    fontWeight: 'bold',
    marginLeft: 60,
  },
  appButtonIcon: {
    height: 30,
    width: 30,
    marginRight: 24,
  },
});

export default DetailsView;
