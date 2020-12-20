import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Details = ({route, navigation}) => {
  const params = route.params.params;
  const {name, introduction, domain, contribution, imageSource} = params.item;

  return (
    <>
      <View style={styles.headerImageContainer}>
        <Image style={styles.imageStyle} source={{uri: imageSource}} />
      </View>
      <View style={styles.body}>
        <Text style={styles.titleStyle}>{name}</Text>
        <Text style={styles.label}>Introduction:</Text>
        <Text style={styles.sectionTitle}>{introduction}</Text>
        <Text style={styles.label}>Contributions:</Text>
        <Text style={styles.sectionTitle}>{contribution}</Text>
        <Text style={styles.label}>Domain:</Text>
        <Text style={styles.sectionTitle}>{domain}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  imageStyle: {
    height: 300,
    width: 380,
  },
  body: {
    flexDirection: 'column',
    marginBottom: 10,
    paddingBottom: 30,
    paddingTop: 10,
    fontFamily: 'sans-serif',
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
    paddingHorizontal: 24,
    fontFamily: 'sans-serif',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 20,
    paddingHorizontal: 24,
    fontSize: 18,
  },
});

export default Details;
