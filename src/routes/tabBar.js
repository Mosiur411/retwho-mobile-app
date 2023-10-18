import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import icons from '../constants/icons';
import {screenNames} from './screenNames';
import ScanQrCode from '../screens/scanQrCode';
import colors from '../constants/colors';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  const getTabIcon = ({focused, routeName}) => {
    let Icon;
    if (routeName === screenNames.Dashboard) {
      Icon = focused
        ? icons.home({color: colors.appColor})
        : icons.home({color: colors.appColorSecondary});
    }
    if (routeName === screenNames.UpcomingReminders) {
      Icon = focused
        ? icons.reminders({color: colors.appColor})
        : icons.reminders({color: colors.appColorSecondary});
    }
    if (routeName === screenNames.Profile) {
      Icon = focused
        ? icons.profile({color: colors.appColor})
        : icons.profile({color: colors.appColorSecondary});
    }
    if (routeName === screenNames.ScanQRCode) {
      Icon = focused ? icons.camera() : icons.camera();
    }
    if (routeName === screenNames.Settings) {
      Icon = focused
        ? icons.dot_vertical({color: colors.appColor})
        : icons.dot_vertical({color: colors.appColorSecondary});
    }
    return Icon;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIcon: getTabIcon,
        tabBarActiveTintColor: colors.appColor,
        tabBarInactiveTintColor: colors.appColorSecondary,
        tabBarHideOnKeyboard: true,
        tabBarItemStyle: {paddingBottom: 5},
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: props =>
            getTabIcon({...props, routeName: screenNames.Dashboard}),
        }}
        name="Dashboard"
        // component={Dashboard}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Reminders',
          tabBarIcon: props =>
            getTabIcon({...props, routeName: screenNames.UpcomingReminders}),
        }}
        // name={screenNames.UpcomingReminders}
        // component={UpcomingReminders}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: props =>
            getTabIcon({...props, routeName: screenNames.ScanQRCode}),
        }}
        name={screenNames.ScanButton}
        component={ScanQrCode}
        initialParams={{external: true}}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate(screenNames.ScanQRCode, {
              external: true,
            });
          },
        })}
      />
      <Tab.Screen
        options={{
          tabBarIcon: props =>
            getTabIcon({...props, routeName: screenNames.Profile}),
        }}
        name="Profile"
        // component={ProfileScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: props =>
            getTabIcon({...props, routeName: screenNames.Settings}),
        }}
        name="Others"
        // component={Others}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
