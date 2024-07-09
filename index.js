import {LogBox} from 'react-native';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

LogBox.ignoreAllLogs(true);
AppRegistry.registerComponent(appName, () => App);
