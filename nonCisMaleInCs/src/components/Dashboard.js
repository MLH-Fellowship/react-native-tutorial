import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Card from '../components/Card';

const Dashboard = ({navigation}) => {
  const [profiles, setProfiles] = useState([]);

  const getLocalData = async () => {
    const dataArr = await AsyncStorage.getItem('data');
    if (dataArr) {
      let Arr = JSON.parse(dataArr);
      setProfiles([...Arr]);
    }
  };

  useEffect(() => {
    getLocalData();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={profiles}
          numColumns={2}
          keyExtractor={(item, index) => item.name}
          renderItem={(item) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {
                    screen: 'Details',
                    params: item,
                  })
                }>
                <Card item={item} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});

export default Dashboard;
