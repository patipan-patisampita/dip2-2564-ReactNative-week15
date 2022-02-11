/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Greeting from './components/Greeting';
import CounterState from './components/CounterState';
import ColumnItems from './components/ColumnItems';
import RowsItems from './components/RowsItems';
import AlertComponent from './components/AlertComponent';
import TextInputDemo from './components/TextInputDemo';

AppRegistry.registerComponent(appName, () => TextInputDemo);
