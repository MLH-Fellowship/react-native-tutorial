import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text} from 'react-native';

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
      <Text>Home</Text>
    </View>
  );
}
