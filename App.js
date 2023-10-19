import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {LogBox} from 'react-native';
import Router from './src/routes';
import 'react-native-gesture-handler';
import {store} from './src/redux/store';

LogBox.ignoreAllLogs();

const App = () => (
  <SafeAreaProvider>
    <Provider store={store}>
      <Router />
      <Toast />
    </Provider>
  </SafeAreaProvider>
);

export default App;
