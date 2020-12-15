import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Card({item}) {
  const {name, domain, imageSource} = item.item;
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: imageSource,
          }}
        />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.subtitle}>{domain}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 0,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'dotted',
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 10,
    paddingBottom: 10,
    textAlign: 'center',
  },
  imageStyle: {
    height: 180,
    width: 180,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
