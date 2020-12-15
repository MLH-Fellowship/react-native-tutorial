import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeView from './src/screens/HomeView';
import DetailsView from './src/screens/DetailsView';
import ExampleView from './src/screens/ExampleView';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          initialRouteName: 'Feed',
          activeTintColor: '#e91e63',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Feed"
          component={HomeView}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Details"
          component={DetailsView}
          options={{
            tabBarLabel: 'Details',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Example"
          component={ExampleView}
          options={{
            tabBarLabel: 'Example',
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
  );
}
