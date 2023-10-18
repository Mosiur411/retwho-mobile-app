import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AuthRoutes from './authRoutes';
import MainRoutes from './mainRoutes';
import SplashScreen from '../screens/splashScreen';

const Router = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const {userDetails: {_id} = {}} = useSelector(state => state?.commonReducer);

  if (showSplashScreen) {
    return <SplashScreen setShowSplash={setShowSplashScreen} />;
  }

  const screensToRender = () => {
    if (!_id) {
      return <AuthRoutes />;
    }

    return <MainRoutes />;
  };

  return <NavigationContainer>{screensToRender()}</NavigationContainer>;
};
export default Router;
