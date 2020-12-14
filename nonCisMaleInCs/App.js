/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Form from '../nonCisMaleInCs/src/components/Form';
import Header from '../nonCisMaleInCs/src/components/Header';
import Home from '../nonCisMaleInCs/src/components/Home';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <Header />
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            initialRouteName: 'Feed',
            activeTintColor: '#e91e63',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen
            name="Feed"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Add Profile"
            component={Form}
            options={{
              tabBarLabel: 'Add Profile',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="account-plus"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Dashboard"
            component={Home}
            options={{
              tabBarLabel: 'Dashboard',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
