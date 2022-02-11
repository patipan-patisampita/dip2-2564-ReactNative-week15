/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Greeting from './components/Greeting';

AppRegistry.registerComponent(appName, () => Greeting);
