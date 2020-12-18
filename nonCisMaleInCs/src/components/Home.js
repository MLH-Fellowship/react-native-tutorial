import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, FlatList, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';

import Card from '../components/Card';

const dummy_profile_data = [
  {
    name: 'Ada Lovelace',
    introduction: 'first computer programmer',
    contribution:
      'Wrote an algorithm for a computing machine in the mid-1800s. She translated an article on an invention by Charles Babbage, and added her own comments.',
    domain: 'Programming',
    imageSource:
      'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwODQwOTQ2MTkw/ada-lovelace-20825279-1-402.jpg',
  },
  {
    name: 'Margaret Hamilton',
    introduction: 'Coined the term ‘software engineering’',
    contribution:
      'Led a team credited with developing the in-flight software for the Apollo space program. Her work was crucial in making the first moon landing, Apollo 11, possible in 1969',
    domain: 'Software Engineering',
    imageSource:
      'https://www.topuniversities.com/sites/default/files/margaret-hamilton.jpg',
  },
  {
    name: 'Grace Hopper',
    introduction:
      'Designed FLOW-MATIC, first accessible computer programming languages written in English',
    contribution:
      'Her perseverance was also notable in her programming work, as she was told very quickly that her idea for a new programming language using entirely English words couldn’t work because computers didn’t understand English.',
    domain: 'Programming',
    imageSource:
      'https://www.topuniversities.com/sites/default/files/grace-hopper.jpg',
  },
];

const Home = ( {navigation} ) => {
  const [profiles, setProfiles] = useState(dummy_profile_data);

  const getLocalData = async () => {
    const dataArr = await AsyncStorage.getItem('data');
    if (dataArr) {
      let Arr = JSON.parse(dataArr);
      setProfiles([...dummy_profile_data, ...Arr]);
    }
  };

  useEffect(() => {
    getLocalData();
  }, []);

  onPress = () => {
    navigation.navigate("DetailView");
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={profiles}
          numColumns={2}
          keyExtractor={(item, index) => item.name}
          renderItem={(item) => {
            return (
              <TouchableOpacity onPress={this.onPress}>
                <Card item={item} />
              </TouchableOpacity>
            );;
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});

export default Home;
