/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './scr/screens/App';

import {name as appName} from './app.json';
import App from './App';
import Welcome from './scr/screens/Welcome';

AppRegistry.registerComponent(appName, () => App);
