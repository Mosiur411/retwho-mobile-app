import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {LogBox} from 'react-native';
import Router from './src/routes';
import 'react-native-gesture-handler';
import {store} from './src/redux/store';
import CodePushProvider from './src/components/codePush';

LogBox.ignoreAllLogs();

const App = () => (
  <SafeAreaProvider>
    <Provider store={store}>
      <CodePushProvider />
      <Router />
      <Toast />
    </Provider>
  </SafeAreaProvider>
);

export default App;
