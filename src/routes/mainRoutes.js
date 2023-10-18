import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from './screenNames';
import TabBar from './tabBar';
const Stack = createNativeStackNavigator();

const MainRoutes = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={screenNames.TabBar} component={TabBar} />
  </Stack.Navigator>
);

export default MainRoutes;
