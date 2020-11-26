/**
 * @format
 */
import {start} from './src/Navigation';

start();
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
