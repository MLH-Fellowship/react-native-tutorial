import {Navigation} from 'react-native-navigation';
import Home from '../screens/Home';
import PushedScreen from '../screens/PushedScreen';
import ModalScreen from '../screens/ModalScreen';

export function registerScreens() {
  Navigation.registerComponent('HomeScreen', () => Home);
  Navigation.registerComponent('PushedScreen', () => PushedScreen);
  Navigation.registerComponent('ModalScreen', () => ModalScreen);
}
