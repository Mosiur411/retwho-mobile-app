import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from './screenNames';
import LoginScreen from '../screens/loginScreen';

const Stack = createNativeStackNavigator();

const AuthRoutes = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={screenNames.Login} component={LoginScreen} />
  </Stack.Navigator>
);

export default AuthRoutes;
