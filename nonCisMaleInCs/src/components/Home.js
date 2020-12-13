import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text} from 'react-native';

import Header from '../components/Header';

export default function Home() {
  const getLocalData = async () => {
    const dataArr = await AsyncStorage.getItem('data');
    console.log(JSON.parse(dataArr));
  };

  useEffect(() => {
    getLocalData();
  }, []);

  return (
    <View>
      <Header />
      <Text>Home</Text>
    </View>
  );
}
