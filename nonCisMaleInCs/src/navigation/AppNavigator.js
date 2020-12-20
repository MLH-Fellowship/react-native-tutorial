import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../components/Home';
import Form from '../components/Form';
import Dashboard from '../components/Dashboard';
import Details from '../components/Details';
import Header from '../components/Header';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Profile':
      return 'Profile';
    case 'Dashboard':
      return 'Dashboard';
  }
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        initialRouteName: 'Feed',
        activeTintColor: '#3498DB',
        inactiveTintColor: 'gray',
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'account-plus';
          } else if (route.name === 'Dashboard') {
            iconName = 'account';
          }
          return (
            <MaterialCommunityIcons name={iconName} color={color} size={size} />
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Form} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
}

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          gestureEnabled: true,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
        headerMode="float">
        <Stack.Screen
          name="Home"
          component={MainTabNavigator}
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
          })}
        />
        <Stack.Screen
          name="Profile"
          component={MainTabNavigator}
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
          })}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({route}) => ({
            title: route.params.name,
          })}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{title: 'Dashboard'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
